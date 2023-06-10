import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'https://2113-2402-800-629c-1974-5574-9900-6534-25e4.ngrok-free.app/',
    // baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',

    },
    mode: 'no-cors'
});

export default axiosClient;
