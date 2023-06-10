import React, { useState, useEffect } from "react";
import { Rate, Form, Avatar, Typography } from "antd";
import axios from "axios";

const { Title, Paragraph, Text } = Typography;

const RateNComment = () => {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchRate();
  }, []);

  const fetchRate = async () => {
    try {
      const response = await axios.get("/api/rate"); // Đường dẫn "/api/rate" là ví dụ, bạn cần thay đổi thành đường dẫn tương ứng trên server của bạn
      const rate = response.data.rate;
      setRating(rate);
    } catch (error) {
      console.log("Error fetching rate:", error);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (values) => {
    console.log("Received form values:", values);
    console.log("Rating:", rating);
    // Add your logic to submit the comment data
  };

  return (
    <div
      style={{ backgroundColor: "#f2f2f2" }}
      className="px-3 py-2 mt-3 rounded-4"
    >
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
            <Rate onChange={handleRatingChange} value={rating} disabled />
          </Form.Item>
          <Form.Item label="" style={{ marginBottom: 0 }} className="ml-3">
            <Typography.Text type="secondary">
              Ngày đánh giá: 10/06/2023
            </Typography.Text>
          </Form.Item>
        </div>
        <Form.Item label="" className="pt-3">
          <Typography.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography.Paragraph>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RateNComment;
