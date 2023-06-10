import React, { useState } from "react";
import axios from "../../../api/axiosClient";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const EditName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra nếu các trường chưa được điền vào
    if (!firstName || !lastName) {
      message.error("Please fill in all fields.");
      return;
    }

    // Tạo đối tượng dữ liệu từ dữ liệu form
    const data = {
      firstName: firstName,
      lastName: lastName,
    };

    try {
      // Gửi yêu cầu POST đến API
      const response = await axios.post("/posts", data);
      console.log(response.data); // In phản hồi từ API nếu cần

      // Xử lý phản hồi từ API theo yêu cầu của bạn (ví dụ: hiển thị thông báo thành công)
      message.success("Name updated successfully!");

      // Navigate về trang trước
      navigate(-1);
    } catch (error) {
      console.error(error); // Xử lý lỗi nếu có
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Change your name</h1>
      <div className="card mt-4 mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <div className="mb-4">
            <p>
              If you want to change the name associated with your AbeBooks
              customer account, you may do so below. Be sure to click the{" "}
              <b>Save Changes</b> button when you are done.
            </p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="ap_customer_name">First name</label>
              <input
                type="text"
                id="ap_customer_name"
                name="customerName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                tabIndex="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ap_customer_name">Last name</label>
              <input
                type="text"
                id="ap_customer_name"
                name="customerName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                tabIndex="1"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
