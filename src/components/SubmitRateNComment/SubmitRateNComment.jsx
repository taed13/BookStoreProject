import React, { useState } from "react";
import { Rate, Form, Avatar, Typography, Input, Button } from "antd";

const { Title, Paragraph, Text } = Typography;

const SubmitRateNComment = () => {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);
  const [showDate, setShowDate] = useState(false); // Thêm trạng thái showDate

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (values) => {
    console.log("Received form values:", values);
    console.log("Rating:", rating);
    setShowDate(true); // Cập nhật showDate thành true khi handleSubmit được gọi
    // Add your logic to submit the rating and comment data
  };

  return (
    <div className="px-3 py-2 mt-3 rounded-4 border">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
        }}
        className="mt-3 mb-0"
      >
        <Avatar
          size={48}
          src="https://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111"
        />
        {/* Thay thế 'url_to_avatar_image' bằng đường dẫn đến hình ảnh avatar */}
        <Title level={5} style={{ margin: "0 8px" }}>
          Username
        </Title>
        {/* Thay 'Username' bằng tên người dùng */}
      </div>
      <Form form={form} onFinish={handleSubmit} gutter={16}>
        <div style={{ display: "flex" }}>
          <Form.Item label="" style={{ marginBottom: 0 }}>
            <Rate onChange={handleRatingChange} value={rating} />
          </Form.Item>
          <Form.Item label="" style={{ marginBottom: 0 }} className="ml-3">
            <Typography.Text type="secondary">
              {showDate && "Ngày đánh giá: 10/06/2023"}{" "}
              {/* Hiển thị ngày đánh giá khi showDate là true */}
            </Typography.Text>
          </Form.Item>
        </div>
        <Form.Item label="" className="pt-3">
          <Input.TextArea rows={4} placeholder="Nhập bình luận của bạn" />
        </Form.Item>
        <div class="d-flex flex-row-reverse">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-danger bg-danger"
            >
              Gửi bình luận
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SubmitRateNComment;
