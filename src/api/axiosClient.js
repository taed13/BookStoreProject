import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://bedd-2402-800-629c-1974-cc6f-3e4a-9e55-295d.ngrok-free.app/",
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Content-Type": "application/json",
  },
  mode: "no-cors",
});

export default axiosClient;
