import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost/eventos-academicos/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;