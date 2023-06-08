import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axiosClient";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState('');

  const onFinish = (values) => {
    axios
      .post('/comments', { email: values.email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="bg-white border rounded-5">
      <div className="row">
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100 vh-100 rounded-4"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </div>
        <div className="col-sm-6 text-black">
          <div className="p-5 ms-xl-4 text-center">
            <Link to='/' className="text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor" className="bi bi-book text-danger" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
              </svg>
              <span className="ml-2 h1 fw-bold display-6 link-dark">Sách Việt</span>
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <Form
              form={form}
              name="forgot-password-form"
              onFinish={onFinish}
              style={{ width: '25rem' }}
            >
              <h3 className="fw-normal fw-bolder" style={{ letterSpacing: '1px' }}>Password assistance</h3>
              <p className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                Enter the email address associated with your AbeBooks account, then click Continue.
              </p>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email address!' },
                  { type: 'email', message: 'Please enter a valid email address!' }
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email address"  className="h-100"/>
              </Form.Item>

              <div className=" mb-4">
                <Button type="primary" htmlType="submit" className="btn-lg btn-danger w-100 h-100">
                  Continue
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
