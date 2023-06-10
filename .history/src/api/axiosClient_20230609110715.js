import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:8999/api/v1",
});

export default axiosClient;
