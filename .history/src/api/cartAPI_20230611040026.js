import axiosClient from "./axiosClient";

export const cartAPI = {
  addToCart: (params) =>
    axiosClient.post(`/shoppingCart`, params),
  getCart: () => axiosClient.get(`/shoppingCart`),
};
