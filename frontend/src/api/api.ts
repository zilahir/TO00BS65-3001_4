import axios from 'axios';
import { API_ROOT } from './apiEndpoints';

export const axiosInstance = axios.create({
    url: API_ROOT
})