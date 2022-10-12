import axios from 'axios';

export const API_URL = `https://solo.qi.mineradnow.space/api2/v1/token/QIE`;

export const api = axios.create({
    baseURL: API_URL
});