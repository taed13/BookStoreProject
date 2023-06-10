import axiosClient from "./axiosClient";

const AuthAPI = {
  login: (param) => axiosClient.post("/users/login", param),
  register: (param) =>
    axiosClient.post("/users/addUser", param),
};

export default AuthAPI;
