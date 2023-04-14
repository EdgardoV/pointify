import axios, {AxiosInstance} from 'axios';
import {API_URL} from '../config/config';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': 'true',
  },
});
