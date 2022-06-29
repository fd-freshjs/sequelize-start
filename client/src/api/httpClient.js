import axios from 'axios';

const host = 'http://localhost:5000/api';

const httpClient = axios.create({
  baseURL: host,
  
});

export default httpClient;
