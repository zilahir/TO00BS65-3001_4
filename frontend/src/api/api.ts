import axios from 'axios';
// import { API_ROOT } from './apiEndpoints';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000/api'
})