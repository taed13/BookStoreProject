import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    
});

axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('userId'); // Sửa 'userID' thành 'userId' để phù hợp với tên khóa bạn đã lưu
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
