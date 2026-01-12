import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============== Restaurant API ==============

export const getRestaurantInfo = async () => {
  try {
    const response = await apiClient.get('/restaurant');
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant info:', error);
    throw error;
  }
};

// ============== Menu API ==============

export const getMenu = async () => {
  try {
    const response = await apiClient.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};

export const getMenuCategory = async (categoryId) => {
  try {
    const response = await apiClient.get(`/menu/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu category:', error);
    throw error;
  }
};

// ============== Reservations API ==============

export const createReservation = async (reservationData) => {
  try {
    const response = await apiClient.post('/reservations', reservationData);
    return response.data;
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw error;
  }
};

export const getReservations = async () => {
  try {
    const response = await apiClient.get('/reservations');
    return response.data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
    throw error;
  }
};

// ============== Reviews API ==============

export const getReviews = async () => {
  try {
    const response = await apiClient.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await apiClient.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

// ============== Gallery API ==============

export const getGallery = async () => {
  try {
    const response = await apiClient.get('/gallery');
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw error;
  }
};

export const getGalleryByCategory = async (category) => {
  try {
    const response = await apiClient.get(`/gallery/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery by category:', error);
    throw error;
  }
};

// ============== Health Check API ==============

export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
};

export default apiClient;
