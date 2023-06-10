import axiosClient from "./axiosClient";

const searchAPI = {
    getProductsByAuthor: (authorName) => {
        const url = `/api/v1/author/products/authorName?authorName=${authorName}`;
        return axiosClient.get(url);
    },
};

export default searchAPI;
