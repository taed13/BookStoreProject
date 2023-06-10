import React from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";

const EditAddress = ({ visible, onCancel, addressData }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Handle form submission and address update logic here
    // ...
    onCancel(); // Close the modal after address update
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Form onFinish={onFinish} initialValues={addressData}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="address"
            label="Số nhà, tên đường"
            rules={[
              { required: true, message: "Vui lòng nhập số nhà, tên đường" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="ward"
            label="Phường/Xã"
            rules={[{ required: true, message: "Vui lòng nhập phường/xã" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="district"
            label="Quận/Huyện"
            rules={[{ required: true, message: "Vui lòng nhập quận/huyện" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="city"
            label="Thành phố"
            rules={[{ required: true, message: "Vui lòng nhập thành phố" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item className="text-center">
        <Button
          type="primary"
          htmlType="submit"
          className="btn-danger bg-danger"
        >
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditAddress;
