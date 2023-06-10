import React, { useState, useContext } from "react";
import {
  Rate,
  Form,
  Avatar,
  Typography,
  Input,
  Button,
  notification,
} from "antd";
import { commentAPI } from "../../api/ commentAPI";

const { Title } = Typography;

const SubmitRateNComment = ({ idProduct }) => {
  const context = useContext;
  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);
  const [showDate, setShowDate] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  const SubmitComment = async (productId, content, rating) => {
    if (context?.user?.id) {
      const res = await commentAPI.postComment({
        userId: context.user.id,
        productId: productId,
        content: content,
        like: rating,
      });
      console.log("121--", res);
    }
  };

  const handleSubmit = (values) => {
    form
      .validateFields()
      .then(() => {
        console.log("Received form values:", values);
        console.log("Rating:", rating);
        setShowDate(true);

        SubmitComment(idProduct, values.comment, values.rating);
        notification.success({
          message: "Success",
          description: "Rating and comment submitted successfully.",
        });
      })
      .catch((error) => {
        console.log("Validation failed:", error);

        // Display error notification
        notification.error({
          message: "Validation Error",
          description: "Please fill in all the required fields.",
        });
      });
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
        {context?.user?.avatar && (
          <Avatar size={48} src={context.user.avatar} />
        )}

        <Title level={5} style={{ margin: "0 8px" }}>
          {context?.user?.userName}
        </Title>
      </div>
      <Form form={form} onFinish={handleSubmit} gutter={16}>
        <div style={{ display: "flex" }}>
          <Form.Item
            label=""
            style={{ marginBottom: 0 }}
            name="rating"
            rules={[
              {
                validator: (_, value) => {
                  if (value === 0) {
                    return Promise.reject("Please select a rating");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Rate onChange={handleRatingChange} value={rating} />
          </Form.Item>
          <Form.Item
            label=""
            style={{ marginBottom: 0 }}
            className="ml-3"
            name="ratingDate"
          >
            <Typography.Text type="secondary">
              {showDate && "Rating Date: 10/06/2023"}
            </Typography.Text>
          </Form.Item>
        </div>
        <Form.Item
          label=""
          className="pt-3"
          name="comment"
          rules={[
            {
              required: true,
              message: "Please enter your comment",
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter your comment" />
        </Form.Item>
        <div className="d-flex flex-row-reverse">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-danger bg-danger"
            >
              Submit Comment
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SubmitRateNComment;
