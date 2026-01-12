from fastapi import FastAPI, APIRouter, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from datetime import datetime

from models import (
    RestaurantInfo, MenuCategory, MenuItem, MenuItemCreate,
    Reservation, ReservationCreate, Review, ReviewCreate,
    GalleryImage, GalleryImageCreate
)
from seed_data import RESTAURANT_INFO, MENU_CATEGORIES, REVIEWS, GALLERY_IMAGES

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="Majestea API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ============== Database Initialization ==============

async def init_database():
    """Initialize database with seed data if empty"""
    try:
        # Check if restaurant info exists
        restaurant = await db.restaurant.find_one()
        if not restaurant:
            await db.restaurant.insert_one(RESTAURANT_INFO)
            logger.info("Restaurant info seeded")
        
        # Check if menu exists
        menu_count = await db.menu_categories.count_documents({})
        if menu_count == 0:
            await db.menu_categories.insert_many(MENU_CATEGORIES)
            logger.info("Menu categories seeded")
        
        # Check if reviews exist
        reviews_count = await db.reviews.count_documents({})
        if reviews_count == 0:
            await db.reviews.insert_many(REVIEWS)
            logger.info("Reviews seeded")
        
        # Check if gallery exists
        gallery_count = await db.gallery.count_documents({})
        if gallery_count == 0:
            await db.gallery.insert_many(GALLERY_IMAGES)
            logger.info("Gallery images seeded")
            
        logger.info("Database initialization complete")
    except Exception as e:
        logger.error(f"Database initialization error: {e}")


@app.on_event("startup")
async def startup_event():
    await init_database()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()


# ============== Root Endpoint ==============

@api_router.get("/")
async def root():
    return {"message": "Bienvenue sur l'API Majestea", "version": "1.0.0"}


# ============== Restaurant Endpoints ==============

@api_router.get("/restaurant", response_model=dict)
async def get_restaurant_info():
    """Get restaurant information"""
    restaurant = await db.restaurant.find_one()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant info not found")
    restaurant.pop('_id', None)
    return restaurant


# ============== Menu Endpoints ==============

@api_router.get("/menu", response_model=List[dict])
async def get_menu():
    """Get all menu categories with items"""
    categories = await db.menu_categories.find().to_list(100)
    for cat in categories:
        cat.pop('_id', None)
    return categories


@api_router.get("/menu/{category_id}", response_model=dict)
async def get_menu_category(category_id: str):
    """Get a specific menu category"""
    category = await db.menu_categories.find_one({"id": category_id})
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    category.pop('_id', None)
    return category


# ============== Reservation Endpoints ==============

@api_router.post("/reservations", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_reservation(reservation: ReservationCreate):
    """Create a new reservation"""
    import uuid
    
    reservation_dict = reservation.dict()
    reservation_dict["id"] = str(uuid.uuid4())
    reservation_dict["status"] = "pending"
    reservation_dict["created_at"] = datetime.utcnow()
    
    result = await db.reservations.insert_one(reservation_dict)
    
    if result.inserted_id:
        reservation_dict.pop('_id', None)
        logger.info(f"New reservation created: {reservation_dict['id']}")
        return {
            "success": True,
            "message": "Votre demande de réservation a été envoyée avec succès !",
            "reservation": reservation_dict
        }
    
    raise HTTPException(status_code=500, detail="Failed to create reservation")


@api_router.get("/reservations", response_model=List[dict])
async def get_reservations():
    """Get all reservations (admin)"""
    reservations = await db.reservations.find().sort("created_at", -1).to_list(1000)
    for res in reservations:
        res.pop('_id', None)
        if isinstance(res.get('created_at'), datetime):
            res['created_at'] = res['created_at'].isoformat()
    return reservations


@api_router.get("/reservations/{reservation_id}", response_model=dict)
async def get_reservation(reservation_id: str):
    """Get a specific reservation"""
    reservation = await db.reservations.find_one({"id": reservation_id})
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")
    reservation.pop('_id', None)
    if isinstance(reservation.get('created_at'), datetime):
        reservation['created_at'] = reservation['created_at'].isoformat()
    return reservation


@api_router.patch("/reservations/{reservation_id}/status", response_model=dict)
async def update_reservation_status(reservation_id: str, status: str):
    """Update reservation status"""
    if status not in ["pending", "confirmed", "cancelled"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    result = await db.reservations.update_one(
        {"id": reservation_id},
        {"$set": {"status": status}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    return {"success": True, "message": f"Reservation status updated to {status}"}


# ============== Reviews Endpoints ==============

@api_router.get("/reviews", response_model=List[dict])
async def get_reviews():
    """Get all reviews"""
    reviews = await db.reviews.find().to_list(100)
    for review in reviews:
        review.pop('_id', None)
    return reviews


@api_router.post("/reviews", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_review(review: ReviewCreate):
    """Create a new review"""
    import uuid
    
    review_dict = review.dict()
    review_dict["id"] = str(uuid.uuid4())
    review_dict["date"] = "Aujourd'hui"
    review_dict["avatar"] = review.name[0].upper() if review.name else "?"
    
    result = await db.reviews.insert_one(review_dict)
    
    if result.inserted_id:
        review_dict.pop('_id', None)
        return {"success": True, "review": review_dict}
    
    raise HTTPException(status_code=500, detail="Failed to create review")


# ============== Gallery Endpoints ==============

@api_router.get("/gallery", response_model=List[dict])
async def get_gallery():
    """Get all gallery images"""
    images = await db.gallery.find().to_list(100)
    for img in images:
        img.pop('_id', None)
    return images


@api_router.get("/gallery/{category}", response_model=List[dict])
async def get_gallery_by_category(category: str):
    """Get gallery images by category"""
    images = await db.gallery.find({"category": category}).to_list(100)
    for img in images:
        img.pop('_id', None)
    return images


# ============== Health Check ==============

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Test database connection
        await db.command("ping")
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
