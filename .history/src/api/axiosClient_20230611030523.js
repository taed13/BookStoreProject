import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:8999/api/v1",
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Content-Type": "application/json",
  },
  mode: "no-cors",
});

export default axiosClient;
