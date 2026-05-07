import axios from 'axios';

// CAMBIA esta línea:
const API_URL = 'http://localhost:8000/api/v1';  // ← API local

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const getOrders = (page: number = 1, limit: number = 10) =>
  api.get(`/orders?page=${page}&limit=${limit}`);

export const getProducts = () => api.get('/products');

export const getHealth = () => api.get('/health');

export default api;