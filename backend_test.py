#!/usr/bin/env python3
"""
Majestea Restaurant Backend API Test Suite
Tests all backend endpoints for the Majestea restaurant application
"""

import requests
import json
import sys
from datetime import datetime, timedelta
import uuid

# Backend URL from frontend/.env
BASE_URL = "https://tea-and-treats.preview.emergentagent.com/api"

class MajesteatAPITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, message, response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if not success and response_data:
            print(f"   Response: {response_data}")
    
    def test_health_check(self):
        """Test GET /api/health endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/health", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Health Check", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            # Check required fields
            if data.get("status") != "healthy":
                self.log_test("Health Check", False, f"Expected status 'healthy', got '{data.get('status')}'", data)
                return False
                
            if data.get("database") != "connected":
                self.log_test("Health Check", False, f"Expected database 'connected', got '{data.get('database')}'", data)
                return False
                
            self.log_test("Health Check", True, "Health endpoint working correctly")
            return True
            
        except Exception as e:
            self.log_test("Health Check", False, f"Request failed: {str(e)}")
            return False
    
    def test_restaurant_info(self):
        """Test GET /api/restaurant endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/restaurant", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Restaurant Info", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            # Check required fields
            if data.get("name") != "Majestea":
                self.log_test("Restaurant Info", False, f"Expected name 'Majestea', got '{data.get('name')}'", data)
                return False
                
            if not data.get("address"):
                self.log_test("Restaurant Info", False, "Missing address field", data)
                return False
                
            if not data.get("phone"):
                self.log_test("Restaurant Info", False, "Missing phone field", data)
                return False
                
            if data.get("google_rating") != 4.7:
                self.log_test("Restaurant Info", False, f"Expected google_rating 4.7, got {data.get('google_rating')}", data)
                return False
                
            self.log_test("Restaurant Info", True, "Restaurant info endpoint working correctly")
            return True
            
        except Exception as e:
            self.log_test("Restaurant Info", False, f"Request failed: {str(e)}")
            return False
    
    def test_menu(self):
        """Test GET /api/menu endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/menu", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Menu", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("Menu", False, "Expected array response", data)
                return False
                
            if len(data) != 4:
                self.log_test("Menu", False, f"Expected 4 categories, got {len(data)}", data)
                return False
                
            # Check for required categories (French names)
            category_names = [cat.get("name", "").lower() for cat in data]
            expected_categories = ["plats principaux", "entrées", "salades", "desserts & douceurs"]
            
            for expected in expected_categories:
                if expected not in category_names:
                    self.log_test("Menu", False, f"Missing category: {expected}", category_names)
                    return False
            
            # Check each category has items
            for category in data:
                if not category.get("items") or len(category["items"]) == 0:
                    self.log_test("Menu", False, f"Category '{category.get('name')}' has no items", category)
                    return False
                    
                # Check item structure
                for item in category["items"]:
                    if not all(key in item for key in ["name", "price", "description"]):
                        self.log_test("Menu", False, f"Item missing required fields in category '{category.get('name')}'", item)
                        return False
                        
            self.log_test("Menu", True, f"Menu endpoint working correctly with {len(data)} categories")
            return True
            
        except Exception as e:
            self.log_test("Menu", False, f"Request failed: {str(e)}")
            return False
    
    def test_menu_category(self):
        """Test GET /api/menu/mains endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/menu/mains", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Menu Category", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, dict):
                self.log_test("Menu Category", False, "Expected object response", data)
                return False
                
            if data.get("id") != "mains":
                self.log_test("Menu Category", False, f"Expected category ID 'mains', got '{data.get('id')}'", data)
                return False
                
            if not data.get("items") or len(data["items"]) == 0:
                self.log_test("Menu Category", False, "Category has no items", data)
                return False
                
            self.log_test("Menu Category", True, f"Menu category endpoint working correctly with {len(data['items'])} items")
            return True
            
        except Exception as e:
            self.log_test("Menu Category", False, f"Request failed: {str(e)}")
            return False
    
    def test_create_reservation(self):
        """Test POST /api/reservations endpoint"""
        try:
            # Use future date to avoid validation issues
            future_date = (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%d")
            
            reservation_data = {
                "name": "Marie Dubois",
                "phone": "0612345678",
                "date": future_date,
                "time": "19:00",
                "guests": "2"
            }
            
            response = self.session.post(
                f"{self.base_url}/reservations",
                json=reservation_data,
                timeout=10
            )
            
            if response.status_code != 201:
                self.log_test("Create Reservation", False, f"Expected status 201, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not data.get("success"):
                self.log_test("Create Reservation", False, "Expected success: true", data)
                return False
                
            reservation = data.get("reservation")
            if not reservation:
                self.log_test("Create Reservation", False, "Missing reservation object", data)
                return False
                
            if not reservation.get("id"):
                self.log_test("Create Reservation", False, "Missing reservation ID", reservation)
                return False
                
            if reservation.get("status") != "pending":
                self.log_test("Create Reservation", False, f"Expected status 'pending', got '{reservation.get('status')}'", reservation)
                return False
                
            # Store reservation ID for later tests
            self.test_reservation_id = reservation.get("id")
            
            self.log_test("Create Reservation", True, f"Reservation created successfully with ID: {reservation.get('id')}")
            return True
            
        except Exception as e:
            self.log_test("Create Reservation", False, f"Request failed: {str(e)}")
            return False
    
    def test_list_reservations(self):
        """Test GET /api/reservations endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/reservations", timeout=10)
            
            if response.status_code != 200:
                self.log_test("List Reservations", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("List Reservations", False, "Expected array response", data)
                return False
                
            # Should have at least the reservation we just created
            if len(data) == 0:
                self.log_test("List Reservations", False, "No reservations found", data)
                return False
                
            # Check structure of first reservation
            reservation = data[0]
            required_fields = ["id", "name", "phone", "date", "time", "guests", "status"]
            for field in required_fields:
                if field not in reservation:
                    self.log_test("List Reservations", False, f"Missing field '{field}' in reservation", reservation)
                    return False
                    
            self.log_test("List Reservations", True, f"Reservations list working correctly with {len(data)} reservations")
            return True
            
        except Exception as e:
            self.log_test("List Reservations", False, f"Request failed: {str(e)}")
            return False
    
    def test_reviews(self):
        """Test GET /api/reviews endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/reviews", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Reviews", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("Reviews", False, "Expected array response", data)
                return False
                
            if len(data) != 5:
                self.log_test("Reviews", False, f"Expected 5 reviews, got {len(data)}", data)
                return False
                
            # Check structure of reviews
            for review in data:
                required_fields = ["name", "rating", "comment", "avatar"]
                for field in required_fields:
                    if field not in review:
                        self.log_test("Reviews", False, f"Missing field '{field}' in review", review)
                        return False
                        
                # Check rating is valid
                rating = review.get("rating")
                if not isinstance(rating, (int, float)) or rating < 1 or rating > 5:
                    self.log_test("Reviews", False, f"Invalid rating: {rating}", review)
                    return False
                    
            self.log_test("Reviews", True, f"Reviews endpoint working correctly with {len(data)} reviews")
            return True
            
        except Exception as e:
            self.log_test("Reviews", False, f"Request failed: {str(e)}")
            return False
    
    def test_gallery(self):
        """Test GET /api/gallery endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/gallery", timeout=10)
            
            if response.status_code != 200:
                self.log_test("Gallery", False, f"Expected status 200, got {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("Gallery", False, "Expected array response", data)
                return False
                
            if len(data) != 6:
                self.log_test("Gallery", False, f"Expected 6 images, got {len(data)}", data)
                return False
                
            # Check structure of images
            for image in data:
                required_fields = ["src", "alt", "category"]
                for field in required_fields:
                    if field not in image:
                        self.log_test("Gallery", False, f"Missing field '{field}' in image", image)
                        return False
                        
            self.log_test("Gallery", True, f"Gallery endpoint working correctly with {len(data)} images")
            return True
            
        except Exception as e:
            self.log_test("Gallery", False, f"Request failed: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"🧪 Starting Majestea API Tests")
        print(f"📍 Base URL: {self.base_url}")
        print("=" * 60)
        
        tests = [
            self.test_health_check,
            self.test_restaurant_info,
            self.test_menu,
            self.test_menu_category,
            self.test_create_reservation,
            self.test_list_reservations,
            self.test_reviews,
            self.test_gallery
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            if test():
                passed += 1
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Backend API is working correctly.")
            return True
        else:
            print(f"⚠️  {total - passed} tests failed. Check the issues above.")
            return False
    
    def get_summary(self):
        """Get test summary"""
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        summary = {
            "total_tests": total,
            "passed": passed,
            "failed": total - passed,
            "success_rate": (passed / total * 100) if total > 0 else 0,
            "results": self.test_results
        }
        
        return summary

if __name__ == "__main__":
    tester = MajesteatAPITester()
    success = tester.run_all_tests()
    
    # Print detailed summary
    summary = tester.get_summary()
    print(f"\n📈 Success Rate: {summary['success_rate']:.1f}%")
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)