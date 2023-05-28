import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi biểu mẫu và xử lý thay đổi mật khẩu tại đây
    // ...

    // Reset trường nhập liệu
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <>
      <h1 id="ap_cnep_header" className="container mt-2">Change Password</h1>
      <Container className="d-flex justify-content-center align-items-center py-3">
        <div className="auth-pagelet-container border p-4 rounded-3">
          <div className="mb-3" style={{ wordWrap: 'break-word' }}>
            <small>
                <p>Để thay đổi mật khẩu của bạn, vui lòng nhập <br /> mật khẩu
            hiện tại và mật khẩu mới.</p>
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
