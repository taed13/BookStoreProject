import axiosClient from "./axiosClient";

export const commentAPI = {
  postComment: (comment) =>
    axiosClient.post(`/comments`, comment),
};
// {
//     userId
//     productId
//     content
// }
