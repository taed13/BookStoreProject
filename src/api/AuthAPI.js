import axiosClient from "./axiosClient";

const AuthAPI = {
	login: (param) => axiosClient.post('/login', param),
	register: (param) => axiosClient.post('/register', param),
}


export default AuthAPI;