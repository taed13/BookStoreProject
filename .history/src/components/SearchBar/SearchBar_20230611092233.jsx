import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
  InputNumber,
} from "antd";

const SearchBar = () => {
  const onFinish = (values) => {
    // Kiểm tra các trường không được để trống
    if (
      !values.author &&
      !values.title &&
      !values.keyword
    ) {
      message.error("Vui lòng nhập ít nhất một trường!");
      return;
    } else {
    }

    // Xử lý logic tìm kiếm tại đây
    console.log("Form submitted:", values);
  };

  return (
    <>
      <div
        className='container my-3 p-4'
        style={{ backgroundColor: "#f5f9fa" }}
      >
        <h3 className='font-weight-bold mb-3'>
          Tìm kiếm đầu sách
        </h3>
        <Form onFinish={onFinish}>
          <Row gutter={[8, 8]} justify='space-between'>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <h5 className='font-weight-bold'>Tác giả:</h5>
              <Form.Item name='author'>
                <Input placeholder='Nhập tác giả' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <h5 className='font-weight-bold'>Tiêu đề:</h5>
              <Form.Item name='nhaCungCap'>
                <Input placeholder='Nhập tên nhà cung cấp' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <h5 className='font-weight-bold'>Min:</h5>
              <Form.Item name='keyword'>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                />
                ;
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
              className=''
            >
              <Button
                type='primary'
                block
                htmlType='submit'
                style={{
                  marginTop: "10%",
                  backgroundColor: "#dc3545",
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
