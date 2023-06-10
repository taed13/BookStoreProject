import axiosClient from "./axiosClient";

export const cartAPI = {
  addToCart: (params) =>
    axiosClient.post(`/shoppingCart`, params),
  getCart: (id) => axiosClient.get(`/shoppingCart/${id}`),
};
