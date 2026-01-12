"""
Seed data for Majestea restaurant database
"""

RESTAURANT_INFO = {
    "name": "Majestea",
    "slogan": "Le brunch & café cosy où chaque moment devient délicieux",
    "address": "123 Bd Paul Vaillant Couturier, 95190 Goussainville",
    "phone": "01 39 91 43 93",
    "email": "contact@majestea.fr",
    "instagram": "@majestea_restaurant",
    "google_rating": 4.7,
    "total_reviews": "2,1k",
    "hours": {
        "monday": {"open": "09:00", "close": "23:00"},
        "tuesday": {"open": "09:00", "close": "23:00"},
        "wednesday": {"open": "09:00", "close": "23:00"},
        "thursday": {"open": "09:00", "close": "23:00"},
        "friday": {"open": "09:00", "close": "23:00"},
        "saturday": {"open": "09:00", "close": "23:00"},
        "sunday": {"open": "09:00", "close": "22:00"}
    },
    "features": ["Terrasse disponible", "WiFi gratuit", "Parking à proximité"]
}

MENU_CATEGORIES = [
    {
        "id": "mains",
        "name": "Plats Principaux",
        "items": [
            {"id": "1", "name": "Majestea Burger Poulet", "price": 19.00, "description": "Burger de poulet croustillant, sauce maison, légumes frais", "category_id": "mains"},
            {"id": "2", "name": "Majestea Burger Bœuf", "price": 22.50, "description": "Burger de bœuf premium, cheddar affiné, oignons caramélisés", "category_id": "mains"},
            {"id": "3", "name": "Linguine Sea Food", "price": 21.00, "description": "Linguine aux fruits de mer, sauce crémeuse à l'ail", "category_id": "mains"},
            {"id": "4", "name": "Escalope Façon Saltimboca", "price": 19.50, "description": "Escalope de veau, jambon de parme, sauge fraîche", "category_id": "mains"},
            {"id": "5", "name": "Chicken Alfredo", "price": 18.00, "description": "Poulet grillé, pâtes fraîches, sauce alfredo crémeuse", "category_id": "mains"},
            {"id": "6", "name": "Saumon du Chef", "price": 24.50, "description": "Saumon rôti, légumes de saison, sauce citronnée", "category_id": "mains"},
            {"id": "7", "name": "Filet de Bœuf", "price": 29.00, "description": "Filet de bœuf premium, sauce au poivre, pommes grenaille", "category_id": "mains"}
        ]
    },
    {
        "id": "starters",
        "name": "Entrées",
        "items": [
            {"id": "8", "name": "Duo de Tacos", "price": 13.00, "description": "Deux tacos gourmands au choix du chef", "category_id": "starters"},
            {"id": "9", "name": "Tartare de Saumon Exotique", "price": 13.00, "description": "Saumon frais, mangue, avocat, sauce passion", "category_id": "starters"},
            {"id": "10", "name": "Burrata Pesto", "price": 13.00, "description": "Burrata crémeuse, pesto basilic, tomates confites", "category_id": "starters"},
            {"id": "11", "name": "Potato Balls", "price": 11.50, "description": "Boulettes de pommes de terre croustillantes, dip maison", "category_id": "starters"},
            {"id": "12", "name": "Crevettes Frites", "price": 11.50, "description": "Crevettes panées croustillantes, sauce cocktail", "category_id": "starters"}
        ]
    },
    {
        "id": "salads",
        "name": "Salades",
        "items": [
            {"id": "13", "name": "Salade César", "price": 19.50, "description": "Laitue romaine, poulet grillé, parmesan, croûtons, sauce césar", "category_id": "salads"},
            {"id": "14", "name": "Salade Crousty Chèvre Miel", "price": 19.50, "description": "Mesclun, chèvre chaud, miel, noix, vinaigrette balsamique", "category_id": "salads"}
        ]
    },
    {
        "id": "desserts",
        "name": "Desserts & Douceurs",
        "items": [
            {"id": "15", "name": "Cœur Coulant Caramel Beurre Salé", "price": 12.80, "description": "Fondant au chocolat, cœur coulant caramel", "category_id": "desserts"},
            {"id": "16", "name": "Brioche façon Pain Perdu", "price": 17.00, "description": "Brioche dorée, fruits frais, chantilly maison", "category_id": "desserts"},
            {"id": "17", "name": "Tiramisu Pistache", "price": 12.80, "description": "Tiramisu revisité à la pistache, crumble", "category_id": "desserts"}
        ]
    }
]

REVIEWS = [
    {
        "id": "1",
        "name": "Sophie L.",
        "rating": 5,
        "date": "Il y a 2 jours",
        "comment": "Un endroit magnifique ! L'ambiance est chaleureuse et féminine, le brunch est délicieux. Je recommande vivement le tiramisu pistache !",
        "avatar": "S"
    },
    {
        "id": "2",
        "name": "Marie D.",
        "rating": 5,
        "date": "Il y a 1 semaine",
        "comment": "La meilleure adresse brunch de Goussainville. La terrasse est superbe et le service impeccable. Le burger poulet est incroyable !",
        "avatar": "M"
    },
    {
        "id": "3",
        "name": "Camille R.",
        "rating": 4,
        "date": "Il y a 2 semaines",
        "comment": "Cadre très joli et féminin, parfait pour un moment entre amies. Les plats sont copieux et savoureux. Un peu d'attente le week-end.",
        "avatar": "C"
    },
    {
        "id": "4",
        "name": "Emma B.",
        "rating": 5,
        "date": "Il y a 3 semaines",
        "comment": "J'adore cet endroit ! L'équipe est adorable et les desserts sont à tomber. Le cœur coulant caramel est mon préféré.",
        "avatar": "E"
    },
    {
        "id": "5",
        "name": "Julie M.",
        "rating": 5,
        "date": "Il y a 1 mois",
        "comment": "Un brunch parfait dans un cadre cosy. Le saumon du chef est exceptionnel. Je reviendrai avec plaisir !",
        "avatar": "J"
    }
]

GALLERY_IMAGES = [
    {
        "id": "1",
        "src": "https://images.unsplash.com/photo-1707643733189-d2e4c472e32c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxicnVuY2glMjByZXN0YXVyYW50fGVufDB8fHx8MTc2ODA1NDk5M3ww&ixlib=rb-4.1.0&q=85&w=800",
        "alt": "Brunch gourmand",
        "category": "brunch"
    },
    {
        "id": "2",
        "src": "https://images.unsplash.com/photo-1667118399331-c6d546acee11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxicnVuY2glMjByZXN0YXVyYW50fGVufDB8fHx8MTc2ODA1NDk5M3ww&ixlib=rb-4.1.0&q=85&w=800",
        "alt": "Desserts élégants",
        "category": "desserts"
    },
    {
        "id": "3",
        "src": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZHxlbnwwfHx8fDE3NjgwNTQ5OTd8MA&ixlib=rb-4.1.0&q=85&w=800",
        "alt": "Fine dining",
        "category": "plats"
    },
    {
        "id": "4",
        "src": "https://images.unsplash.com/photo-1628838463043-b81a343794d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZHxlbnwwfHx8fDE3NjgwNTQ5OTd8MA&ixlib=rb-4.1.0&q=85&w=800",
        "alt": "Plats gourmands",
        "category": "plats"
    },
    {
        "id": "5",
        "src": "https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg?w=800",
        "alt": "Vin et fromages",
        "category": "ambiance"
    },
    {
        "id": "6",
        "src": "https://images.unsplash.com/photo-1596910715979-6a1ef3bb0731?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGVycmFjZXxlbnwwfHx8fDE3NjgwNTUwMDJ8MA&ixlib=rb-4.1.0&q=85&w=800",
        "alt": "Terrasse ensoleillée",
        "category": "terrasse"
    }
]
