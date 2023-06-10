import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:8999/api/v1",
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken != null) {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...config.headers,
        },
        mode: "no-cors",
      };
    }

    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  async (error) => await Promise.reject(error)
);

axiosClient.interceptors.response.use(
  async (response) => await Promise.resolve(response),
  async (error) => {
    return await Promise.reject(error);
  }
);

export default axiosClient;
