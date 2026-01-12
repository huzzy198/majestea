# Majestea - API Contracts

## Overview
Backend API pour le site web du restaurant Majestea - gestion des réservations, menu et avis clients.

## Base URL
`/api`

---

## Endpoints

### 1. Restaurant Info
**GET** `/api/restaurant`
- Retourne les informations du restaurant (adresse, téléphone, horaires, etc.)

### 2. Menu

**GET** `/api/menu`
- Retourne toutes les catégories avec leurs plats

**GET** `/api/menu/{category_id}`
- Retourne les plats d'une catégorie spécifique

### 3. Réservations

**POST** `/api/reservations`
- Créer une nouvelle demande de réservation
- Body:
```json
{
  "name": "string",
  "email": "string (optional)",
  "phone": "string",
  "date": "string (YYYY-MM-DD)",
  "time": "string (HH:MM)",
  "guests": "string",
  "message": "string (optional)"
}
```

**GET** `/api/reservations`
- Liste toutes les réservations (admin)

### 4. Avis Clients

**GET** `/api/reviews`
- Retourne les avis clients

### 5. Galerie

**GET** `/api/gallery`
- Retourne les images de la galerie

---

## Data Models

### Restaurant
```python
{
  "name": str,
  "slogan": str,
  "address": str,
  "phone": str,
  "email": str,
  "instagram": str,
  "google_rating": float,
  "total_reviews": str,
  "hours": dict,
  "features": list
}
```

### MenuItem
```python
{
  "id": str,
  "name": str,
  "price": float,
  "description": str,
  "category_id": str
}
```

### MenuCategory
```python
{
  "id": str,
  "name": str,
  "items": List[MenuItem]
}
```

### Reservation
```python
{
  "id": str,
  "name": str,
  "email": str (optional),
  "phone": str,
  "date": str,
  "time": str,
  "guests": str,
  "message": str (optional),
  "status": str (pending/confirmed/cancelled),
  "created_at": datetime
}
```

### Review
```python
{
  "id": str,
  "name": str,
  "rating": int,
  "date": str,
  "comment": str,
  "avatar": str
}
```

### GalleryImage
```python
{
  "id": str,
  "src": str,
  "alt": str,
  "category": str
}
```

---

## Frontend Integration

### Mock Data Location
`/app/frontend/src/data/mock.js`

### Integration Steps
1. Replace mock imports with API calls using axios
2. Add loading states for async data
3. Handle errors gracefully with toast notifications
4. Keep mock data as fallback for development

### API Base URL
Use `process.env.REACT_APP_BACKEND_URL` from frontend .env
