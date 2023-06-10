import React, { useState } from "react";
import { Card, Typography, Button } from "antd";

const { Text } = Typography;

const EmailDetail = () => {
  const [email, setEmail] = useState({
    sender: "nguoigui@example.com",
    subject: "Chủ đề email",
    content: "Nội dung email...",
    date: "11/06/2023",
  });

  const handleReply = () => {
    // Xử lý hành động trả lời email
  };

  const handleForward = () => {
    // Xử lý hành động chuyển tiếp email
  };

  const handleDelete = () => {
    // Xử lý hành động xóa email
  };

  return (
    <div className="container p-0 mt-2">
      <h4>E-mail của tôi</h4>

      <div className="pl-2">
        <small>
          <p>
            Theo mặc định, các tin nhắn được hiển thị theo thứ tự từ mới nhất
            tới cũ nhất
          </p>
        </small>
        <div className="container p-3 custom-border rounded-3 my-3">
          <Card title={email.subject} extra={<Text>{email.date}</Text>}>
            <Text strong>Người gửi: </Text>
            <Text>{email.sender}</Text>
            <br />
            <br />
            <Text>{email.content}</Text>
          </Card>
          <div className="d-flex justify-content-end mt-3">
            <Button type="primary" onClick={handleReply}>
              Trả lời
            </Button>
            <Button className="ml-2" onClick={handleForward}>
              Chuyển tiếp
            </Button>
            <Button className="ml-2" danger onClick={handleDelete}>
              Xóa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
