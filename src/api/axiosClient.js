import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://2113-2402-800-629c-1974-5574-9900-6534-25e4.ngrok-free.app/',
    // baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',

    },
    mode: 'no-cors'
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
