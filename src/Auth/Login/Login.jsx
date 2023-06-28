import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import AuthAPI from "../../api/AuthAPI";
import { AppContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Validate username and password
      if (!formData.username || !formData.password) {
        setError("Vui lòng cung cấp cả tên người dùng và mật khẩu.");
        return;
      }

      // username format validation
      const usernamePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!usernamePattern.test(formData.username)) {
        setError("Vui lòng nhập địa chỉ tên người dùng hợp lệ.");
        return;
      }

      // Send login request using AuthAPI
      const response = await AuthAPI.login(formData);

      // Process the response from the server
      // ...

      // Kiểm tra phản hồi từ máy chủ
      if (Object.keys(response).length > 0) {
        // Xử lý phản hồi thành công
        localStorage.setItem("userId", JSON.stringify(response.id));
        context?.setUser(response);
        navigate("/"); // Chuyển hướng đến trang chủ

        // Hiển thị thông báo thành công
        notification.success({
          message: "Đăng Nhập Thành Công",
          description: "Bạn đã đăng nhập thành công.",
        });
      } else {
        // Xử lý phản hồi thất bại

        // Hiển thị thông báo lỗi
        notification.error({
          message: "Đăng nhập thất bại",
          description: "Sai Gmail Hoặc Mật Khẩu.",
        });
      }

      // Redirect after successful login
      navigate("/");
    } catch (error) {
      // Handle errors

      // Hiển thị thông báo lỗi
      notification.error({
        message: "Đăng Nhập Thất Bại",
        description: "Sai Gmail Hoặc Mật Khẩu.",
      });
    }
  };

  return (
    <div className="bg-white border rounded-5">
      <div className="row">
        <div className="col-sm-6 text-black">
          <div className="p-5 ms-xl-4 text-center mt-3">
            <Link to="/" className="text-decoration-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10vw"
                height="10vw"
                fill="currentColor"
                className="bi bi-book text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
              </svg>
              <span className="ml-2 h1 fw-bold display-6 link-dark">
                Sách Việt
              </span>
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style={{ width: "25rem" }} className="pt-5">
              <h3
                className="fw-normal mb-3 pb-3 fw-bolder"
                style={{
                  letterSpacing: "1px",
                  textAlign: "left",
                }}
              >
                Đăng nhập
              </h3>

              <div className="form-outline mb-4">
                <input
                  type="username"
                  id="username-address"
                  className="form-control form-control-lg"
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                />

                <label className="form-label ml-0" htmlFor="username-address">
                  username address
                </label>
                <div className="form-notch">
                  <div
                    className="form-notch-leading"
                    style={{ width: "9px" }}
                  ></div>
                  <div
                    className="form-notch-middle"
                    style={{ width: "88.8px" }}
                  ></div>
                  <div className="form-notch-trailing"></div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
                <label className="form-label ml-0" htmlFor="password">
                  Password
                </label>
                <div className="form-notch">
                  <div
                    className="form-notch-leading"
                    style={{ width: "9px" }}
                  ></div>
                  <div
                    className="form-notch-middle"
                    style={{ width: "64.8px" }}
                  ></div>
                  <div className="form-notch-trailing"></div>
                </div>
              </div>

              <div className="pt-1 mb-2">
                <button
                  className="btn btn-info btn-lg btn-block bg-danger btn-danger"
                  type="button"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>

              {/* Error message */}
              {error && <p className="text-danger small mb-2">{error}</p>}

              <p className="small mb-2 pb-lg-2 text-end">
                <Link to="/forgot-password" className="text-muted">
                  Forgot password?
                </Link>
              </p>
              <p className="small" style={{ textAlign: "left" }}>
                By signing in, you agree to the AbeBooks.com{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms & Conditions</a>.
              </p>
              <div className="form-check mt-2" style={{ textAlign: "left" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMe"
                  checked
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <hr className="my-4" />

              <div className="mt-2">
                <p>
                  Don t have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register here
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100 vh-100 rounded-4"
            style={{
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
