from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid


# ============== Restaurant Models ==============

class RestaurantHours(BaseModel):
    open: str
    close: str


class RestaurantInfo(BaseModel):
    name: str
    slogan: str
    address: str
    phone: str
    email: str
    instagram: str
    google_rating: float
    total_reviews: str
    hours: dict
    features: List[str]


# ============== Menu Models ==============

class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    price: float
    description: str
    category_id: str


class MenuCategory(BaseModel):
    id: str
    name: str
    items: List[MenuItem] = []


class MenuCategoryCreate(BaseModel):
    id: str
    name: str


class MenuItemCreate(BaseModel):
    name: str
    price: float
    description: str
    category_id: str


# ============== Reservation Models ==============

class ReservationBase(BaseModel):
    name: str
    email: Optional[str] = None
    phone: str
    date: str
    time: str
    guests: str
    message: Optional[str] = None


class ReservationCreate(ReservationBase):
    pass


class Reservation(ReservationBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "pending"  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


# ============== Review Models ==============

class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int = Field(ge=1, le=5)
    date: str
    comment: str
    avatar: str


class ReviewCreate(BaseModel):
    name: str
    rating: int = Field(ge=1, le=5)
    comment: str


# ============== Gallery Models ==============

class GalleryImage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    src: str
    alt: str
    category: str


class GalleryImageCreate(BaseModel):
    src: str
    alt: str
    category: str
