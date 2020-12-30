import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://10.0.0.244:5000',
};

export default axios.create(axiosConfig);
