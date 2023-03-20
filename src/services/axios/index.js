import axios from 'axios';

export const API_URL = `https://api.qie.systems/v1/landing`;

export const api = axios.create({
    baseURL: API_URL
});
