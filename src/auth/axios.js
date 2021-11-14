import axios from "axios";
const axios_instant = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
});
export default axios_instant;