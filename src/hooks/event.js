// api.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/events';

// OBTENER eventos 
export const getEvents = async (page = 1, limit = 20) => {
  const res = await axios.post(`${API_URL}/`, { page, limit });
  return res.data; // { events: [...] }
};

// INSERTAR evento
export const insertEvent = async (formData) => {
  const res = await axios.post(`${API_URL}/insert`, formData);
  return res.data;
};