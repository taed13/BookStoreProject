import axios from "axios";
const axiosClient = axios.create({
<<<<<<< HEAD
  baseURL: "https://bedd-2402-800-629c-1974-cc6f-3e4a-9e55-295d.ngrok-free.app/",
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Content-Type": "application/json",
  },
  mode: "no-cors",
=======
  baseURL: "http://localhost:8999/api/v1",
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
});

export default axiosClient;
