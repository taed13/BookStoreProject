import axiosClient from "./axiosClient";

export const commentAPI = {
    postComment: (comment) => axiosClient.post(`/api/v1/comments`, comment),
}
// {
//     userId 
//     productId
//     content
// }