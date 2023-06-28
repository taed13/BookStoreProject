import axiosClient from "./axiosClient";

const searchAPI = {
  getProductsByAuthor: (authorName) => {
    const url = `/author/products/authorName?authorName=${authorName}`;
    return axiosClient.get(url);
  },
};

export default searchAPI;
