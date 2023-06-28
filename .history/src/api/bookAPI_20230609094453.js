import axiosClient from "./axiosClient";

const bookAPI = {
    getInformation: (id) => axiosClient.get(`/course/${id}`),
}

export default bookAPI;