import axios from 'axios';
const http = axios.create({
    baseURL: 'http://localhost:3322/api/'
})

export default http