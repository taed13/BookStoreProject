import axiosClient from "./axiosClient";

const searchAPI = {
  getProductsByAuthor: (authorName) => {
    const url = `/author/products/authorName?authorName=${authorName}`;
    return axiosClient.get(url);
  },
  searchByMultipleParams: (
    min,
    max,
    author,
    publisherName
  ) =>
    axiosClient.get(
      `/product/books?maxPrice${max}=&minPrice=${min}&publisherName=${publisherName}&authorName=${author}`
    ),
};

export default searchAPI;
