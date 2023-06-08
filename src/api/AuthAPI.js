import axiosClient from "./axiosClient";

const AuthAPI = {
	login: (param) => axiosClient.post('/api/v1/users/login', param),
	register: (param) => axiosClient.post('/api/v1/users/addUser', param),
}


export default AuthAPI;