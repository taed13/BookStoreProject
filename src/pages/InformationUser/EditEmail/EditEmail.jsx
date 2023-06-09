import React, { useState } from "react";
import axios from "../../../api/axiosClient";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const EditEmail = () => {
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Tạo đối tượng dữ liệu từ dữ liệu form
    const data = {
      newEmail: newEmail,
    };

    try {
      // Gửi yêu cầu POST đến API
      const response = await axios.post("/posts", data);
      console.log(response.data); // In phản hồi từ API nếu cần

      // Xử lý phản hồi từ API theo yêu cầu của bạn (ví dụ: hiển thị thông báo thành công)
      alert("Email updated successfully!");
    } catch (error) {
      console.error(error); // Xử lý lỗi nếu có
    }
  };

  return (
    <Container className="mt-4">
      <h1>Change your email address</h1>
      <div className="card mt-4 mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <div className="mb-4">
            <p>Current email address: tiendatpot@gmail.com</p>
            <p>
              Enter the new email address you would like to associate with your
              account below. We will send a One Time Password (OTP) to that
              address.
            </p>
          </div>
          <Form onSubmit={handleSubmit} className="cvf-widget-form">
            {/* Các trường ẩn */}
            <input
              type="hidden"
              name="clientContext"
              value="133-9917840-8773235"
              className="cvf-widget-hidden-fields"
            />
            <input
              type="hidden"
              name="openid.assoc_handle"
              value="abe_site_us"
              className="cvf-widget-hidden-fields"
            />
            <input
              type="hidden"
              name="openid.mode"
              value="checkid_setup"
              className="cvf-widget-hidden-fields"
            />
            <input
              type="hidden"
              name="openid.ns"
              value="http://specs.openid.net/auth/2.0"
              className="cvf-widget-hidden-fields"
            />
            <input
              type="hidden"
              name="verifyToken"
              value="s|69be951f-0921-3e53-b0af-02d3e120c2ac"
              className="cvf-widget-hidden-fields"
            />

            <Row className="mb-3 m-0">
              <Col>
                <Form.Label>New email address</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  required
                  name="cvf_email"
                  className="form-control"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </Col>
            </Row>

            <div className="text-center">
              <Button type="submit" className="btn btn-danger">
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditEmail;
