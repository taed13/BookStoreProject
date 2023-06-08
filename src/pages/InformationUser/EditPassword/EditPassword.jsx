import React, { useState } from 'react';
import axios from "../../../api/axiosClient";
import { Form, Button, Container } from 'react-bootstrap';

const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu mới
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password don't match");
      return;
    }

    // Tạo đối tượng dữ liệu từ dữ liệu form
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword
    };

    try {
      // Gửi yêu cầu POST đến API
      const response = await axios.post('/posts', data);
      console.log(response.data); // In phản hồi từ API nếu cần

      // Xử lý phản hồi từ API theo yêu cầu của bạn (ví dụ: hiển thị thông báo thành công)
      alert('Password updated successfully!');

      // Reset trường nhập liệu
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      console.error(error); // Xử lý lỗi nếu có
    }
  };

  return (
    <>
      <h1 id="ap_cnep_header" className="container mt-2">Change Password</h1>
      <Container className="d-flex justify-content-center align-items-center py-3">
        <div className="auth-pagelet-container border p-4 rounded-3">
          <div className="mb-3" style={{ wordWrap: 'break-word' }}>
            <small>
              <p>Để thay đổi mật khẩu của bạn, vui lòng nhập <br /> mật khẩu hiện tại và mật khẩu mới.</p>
            </small>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="currentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmNewPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-danger mt-3">
              Save Changes
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default EditPassword;
