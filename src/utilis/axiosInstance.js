import axios from 'axios';

const baseURL = 'http://localhost:5000/api/redOnion';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

export const axiosInstance = axios.create({
    baseURL
})