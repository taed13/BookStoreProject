import axiosClient from "./axiosClient";

const AuthAPI = {
  login: (param) => {
    return axiosClient
      .post(`/users/login`, param)
      .then((response) => {
        // Xử lý khi đăng nhập thành công
        const user = response.data; // Thay đổi tùy theo cấu trúc dữ liệu trả về từ API

        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

        return user; // Trả về thông tin người dùng để xử lý tiếp
      })
      .catch((error) => {
        // Xử lý khi đăng nhập thất bại
        throw error; // Ném lỗi để xử lý ở phía gọi API
      });
  },
  register: (param) => {
    return axiosClient.post(`/users/addUser`, param);
  },
};

export default AuthAPI;
