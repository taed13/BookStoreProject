import axios from 'axios';

const axiosClient = axios.create({
    // baseURL: 'https://7444-58-186-67-47.ngrok-free.app/',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
    },
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
