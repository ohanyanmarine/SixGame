import axios from 'axios';

const api = axios.create({
  baseURL: 'http://46.101.179.50:3145',
});

export default api;
