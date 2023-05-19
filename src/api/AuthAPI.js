import axiosClient from "./axiosClient";

const AuthAPI = {
	login: (param) => axiosClient.post('/login', param)
}


export default AuthAPI;