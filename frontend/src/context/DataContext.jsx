import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRestaurantInfo, getMenu, getReviews, getGallery } from '../services/api';
import { 
  restaurantInfo as mockRestaurantInfo, 
  menuCategories as mockMenuCategories, 
  reviews as mockReviews, 
  galleryImages as mockGalleryImages,
  heroImage as mockHeroImage,
  aboutImage as mockAboutImage
} from '../data/mock';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [restaurantInfo, setRestaurantInfo] = useState(mockRestaurantInfo);
  const [menuCategories, setMenuCategories] = useState(mockMenuCategories);
  const [reviews, setReviews] = useState(mockReviews);
  const [galleryImages, setGalleryImages] = useState(mockGalleryImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static images (kept from mock as they don't need backend)
  const heroImage = mockHeroImage;
  const aboutImage = mockAboutImage;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch all data in parallel
        const [restaurantData, menuData, reviewsData, galleryData] = await Promise.all([
          getRestaurantInfo().catch(() => null),
          getMenu().catch(() => null),
          getReviews().catch(() => null),
          getGallery().catch(() => null)
        ]);

        if (restaurantData) {
          // Transform backend data to match frontend expected format
          setRestaurantInfo({
            name: restaurantData.name,
            slogan: restaurantData.slogan,
            address: restaurantData.address,
            phone: restaurantData.phone,
            email: restaurantData.email,
            instagram: restaurantData.instagram,
            googleRating: restaurantData.google_rating,
            totalReviews: restaurantData.total_reviews,
            hours: restaurantData.hours,
            features: restaurantData.features
          });
        }

        if (menuData) {
          setMenuCategories(menuData);
        }

        if (reviewsData) {
          setReviews(reviewsData);
        }

        if (galleryData) {
          setGalleryImages(galleryData);
        }

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        // Keep mock data as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshData = async () => {
    setLoading(true);
    try {
      const [menuData, reviewsData, galleryData] = await Promise.all([
        getMenu().catch(() => null),
        getReviews().catch(() => null),
        getGallery().catch(() => null)
      ]);

      if (menuData) setMenuCategories(menuData);
      if (reviewsData) setReviews(reviewsData);
      if (galleryData) setGalleryImages(galleryData);
    } catch (err) {
      console.error('Error refreshing data:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    restaurantInfo,
    menuCategories,
    reviews,
    galleryImages,
    heroImage,
    aboutImage,
    loading,
    error,
    refreshData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
