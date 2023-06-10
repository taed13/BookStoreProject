import axiosClient from "./axiosClient";

const bookAPI = {
  getInformation: (id) => axiosClient.get(`/product/${id}`),
};

export default bookAPI;
