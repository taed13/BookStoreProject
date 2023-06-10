import axiosClient from "./axiosClient";

export const cartAPI = {
  addToCart: (params) =>
    axiosClient.post(`/shoppingCart`, params),
  getCart: (id) => axiosClient.get(`/shoppingCart/${id}`),
  deleteCart: (id) =>
    axiosClient.delete(`/shoppingCart/${id}`),
  updateCart: (params) =>
    axiosClient.put(`/shoppingCart`, params),
};
