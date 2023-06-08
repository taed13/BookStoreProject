import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axiosClient";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Khởi tạo state "message" và hàm setter "setMessage"

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/users/forgot-password/${email}`) // Gửi yêu cầu POST đến API "/api/reset-password" với body chứa giá trị email
      .then((response) => {
        console.log(response.data);
        // setMessage(response.data[0].email); // Xử lý thành công, hiển thị thông báo thành công từ phản hồi API
      })
      .catch((error) => {
        setMessage(error.response.data.message); // Xử lý lỗi, hiển thị thông báo lỗi từ phản hồi API
      });
  };
  return (
    <div className='bg-white border rounded-5'>
      <div className='row'>
        <div className='col-sm-6 px-0 d-none d-sm-block'>
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp'
            alt='Login image'
            className='w-100 vh-100 rounded-4'
            style={{
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </div>
        <div className='col-sm-6 text-black'>
          <div className='p-5 ms-xl-4 text-center'>
            <Link to='/' className='text-decoration-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10vw'
                height='10vw'
                fill='currentColor'
                className='bi bi-book text-danger'
                viewBox='0 0 16 16'
              >
                <path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'></path>
              </svg>
              <span className='ml-2 h1 fw-bold display-6 link-dark'>
                Sách Việt
              </span>
            </Link>
          </div>

          <div className='d-flex align-items-center justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5'>
            <form style={{ width: "25rem" }}>
              <h3
                className='fw-normal fw-bolder'
                style={{ letterSpacing: "1px" }}
              >
                Password assistance
              </h3>
              <p
                className='fw-normal mb-3 pb-3'
                style={{ letterSpacing: "1px" }}
              >
                Enter the email address associated with your
                AbeBooks account, then click Continue.
              </p>
              <div className='form-outline mb-4'>
                <input
                  type='email'
                  id='form2Example18'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control form-control-lg'
                />
                <label
                  className='form-label'
                  for='form2Example18'
                  style={{ marginLeft: "0px" }}
                >
                  Email address
                </label>

                <div className='form-notch'>
                  <div
                    className='form-notch-leading'
                    style={{ width: "9px" }}
                  ></div>
                  <div
                    className='form-notch-middle'
                    style={{ width: "88.8px" }}
                  ></div>
                  <div className='form-notch-trailing'></div>
                </div>
              </div>
              <div className='form-outline mb-4'>
                <label for='inputCaptcha'>Captcha</label>
                <div
                  className='g-recaptcha'
                  data-sitekey='6Lf-F_MlAAAAAGtRAebLFIZOmWWy4AyaOZUImk6P'
                ></div>
              </div>

              <div className='pt-1 mb-4'>
                <button
                  className='btn btn-info btn-lg btn-block bg-danger btn-danger'
                  type='button'
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
