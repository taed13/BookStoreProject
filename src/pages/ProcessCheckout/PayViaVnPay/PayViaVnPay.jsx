import React from "react";
import { Typography, Divider, Space, Statistic } from "antd";
import "./PayViaVnPay.css";
import { Button } from "react-bootstrap";

const { Title } = Typography;
const { Countdown } = Statistic;

const PayViaVnPay = () => {
  const deadline = Date.now() + 15 * 60 * 1000; // Thời gian kết thúc đếm ngược (15 phút)

  return (
    <div className="container-sm p-3 mt-4 border" style={{ width: "60%" }}>
      <div className="d-flex align-items-center mb-3 justify-content-between">
        <img
          src={"https://pay.vnpay.vn/Images/brands/logo.svg"}
          alt="VNPay"
          className="mr-2"
        />
        <Title level={5}>
          Giao dịch hết hạn sau
          <Space size={8} className="ml-1">
            <Countdown
              value={deadline}
              format="mm:ss"
              onFinish={() => console.log("Countdown finished")}
              className="countdown"
            />
          </Space>
        </Title>
      </div>
      <Divider />
      <div>
        {
          <div class="alert alert-warning alert-dismissible d-flex align-items-center fade show p-1">
            <small className="p-1">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <strong class="mx-2">Cảnh báo!</strong>Quý khách vui lòng không
              tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên
              website. Xin cảm ơn!
            </small>
          </div>
        }
      </div>

      <div className="row mx-0">
        <div className="col-5 p-3 mr-5" style={{ backgroundColor: "#f5f7f9" }}>
          <h3 className="pb-1">Thông tin đơn hàng</h3>
          <hr />
          <p style={{ color: "#75889c" }} className="mb-0">
            Số tiền thanh toán
          </p>
          <h3 className="font-weight-bold mt-0" style={{ color: "#0171a9" }}>
            1.000.000<small>VND</small>
          </h3>

          <p style={{ color: "#5a7087" }} className="mb-0 mt-4">
            Giá trị đơn hàng
          </p>
          <h5 className="font-weight-bold mt-0">
            1.000.000<small>VND</small>
          </h5>

          <p style={{ color: "#5a7087" }} className="mb-0 mt-4">
            Phí giao dịch
          </p>
          <h5 className="font-weight-bold mt-0">
            0<small>VND</small>
          </h5>

          <p style={{ color: "#5a7087" }} className="mb-0 mt-4">
            Mã đơn hàng
          </p>
          <h5 className="font-weight-bold mt-0">123456789</h5>

          <p style={{ color: "#5a7087" }} className="mb-0 mt-4">
            Bên cung cấp
          </p>
          <h5
            className="font-weight-bold mt-0"
            style={{ textTransform: "uppercase" }}
          >
            Sách Việt
          </h5>
        </div>
        <div className="col-6 p-0 text-center">
          <h3>Quét mã qua ứng dụng Ví VNPAY</h3>
          <img
            src="https://jeju.com.vn/wp-content/uploads/2020/05/vnpay-qr-23-06-2020-2.jpg"
            alt="QR Code"
            className="img-fluid mt-2"
            width={250}
          />
          <br />
          <Button
            className="mt-2 text-dark font-weight-bold btn-light"
            style={{ backgroundColor: "#f5f7f9" }}
          >
            <small className="font-weight-bold">Huỷ thanh toán</small>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PayViaVnPay;
