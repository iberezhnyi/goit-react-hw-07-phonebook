import axios from 'axios';

const api = axios.create({
  baseURL: 'https://65a2983642ecd7d7f0a7e318.mockapi.io/',
});

export default api;
