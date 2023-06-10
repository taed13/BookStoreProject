import React, { useState, useEffect } from "react";
import { Typography, Divider, Space, Statistic, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./PayViaVnPay.css";
import { Input, DatePicker, Button } from "antd";
import BackButton from "../../../components/BackButton/BackButton";
import axios from "axios";
const { Title } = Typography;
const { Countdown } = Statistic;

const { RangePicker } = DatePicker;

const PayViaVnPay = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ API
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        setOrderData(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      });
  }, []);
  const deadline = Date.now() + 15 * 60 * 1000; // Thời gian kết thúc đếm ngược (15 phút)

  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(true);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const handlePayment = () => {
    // Validate input fields
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const cardholderName = document.getElementById("cardholderName").value;
    const billingAddress = document.getElementById("billingAddress").value;
        // Gửi yêu cầu POST đến API để thực hiện thanh toán
        const paymentData = {
          cardNumber,
          expiryDate,
          cvv,
          cardholderName,
          billingAddress,
        };
    
        axios.post("https://api.example.com/payment", paymentData)
          .then(response => {
            // Xử lý phản hồi từ API
            // ...
            setOrderSuccess(true);
            navigate("/process-checkout/complete", { state: { orderSuccess: true } });
          })
          .catch(error => {
            console.error("Lỗi khi gửi yêu cầu thanh toán:", error);
            setOrderSuccess(false);
            navigate("/process-checkout/complete", { state: { orderSuccess: false } });
          });
      
    if (
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !cardholderName ||
      !billingAddress
    ) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng nhập đầy đủ thông tin thanh toán.",
      });
      return;
    }

    // Perform payment processing
    // ...

    // If payment is successful
    setOrderSuccess(true);
    navigate("/process-checkout/complete", { state: { orderSuccess: true } });
  };

  const handleCancelPayment = () => {
    navigate("/process-checkout/complete", { state: { orderSuccess: false } });
  };

  useEffect(() => {
    if (Date.now() > deadline) {
      setCountdownFinished(true);
    }
  }, [deadline]);

  useEffect(() => {
    if (countdownFinished) {
      navigate("/process-checkout/complete", {
        state: { orderSuccess: false },
      });
    }
  }, [countdownFinished, navigate]);

  return (
    <div>
      <div className="container-sm p-0 my-3" style={{ width: "60%" }}>
        <BackButton />
      </div>
      <div className="container-sm p-3 border" style={{ width: "60%" }}>
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
            <div className="alert alert-warning alert-dismissible d-flex align-items-center fade show p-1">
              <small className="p-1">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <strong className="mx-2">Cảnh báo!</strong>Quý khách vui lòng
                không tắt trình duyệt cho đến khi nhận được kết quả giao dịch
                trên website. Xin cảm ơn!
              </small>
            </div>
          }
        </div>

        <div className="row mx-0">
          <div
            className="col-5 p-3 mr-5"
            style={{ backgroundColor: "#f5f7f9" }}
          >
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
          <div className="col-6 p-0">
            <h3 className="text-center">Quét mã qua ứng dụng Ví VNPAY</h3>
            {/* Payment form */}
            <div className="mt-2">
              <label htmlFor="cardNumber">Số thẻ</label>
              <Input id="cardNumber" placeholder="Nhập số thẻ" />
            </div>

            <div className="mt-2">
              <label htmlFor="expiryDate">Ngày hết hạn</label>
              <DatePicker id="expiryDate" style={{ width: "100%" }} />
            </div>

            <div className="mt-2">
              <label htmlFor="cvv">CVV</label>
              <Input id="cvv" placeholder="Nhập CVV" />
            </div>

            <div className="mt-2">
              <label htmlFor="cardholderName">Tên chủ thẻ</label>
              <Input id="cardholderName" placeholder="Nhập tên chủ thẻ" />
            </div>

            <div className="mt-2">
              <label htmlFor="billingAddress">Địa chỉ thanh toán</label>
              <Input
                id="billingAddress"
                placeholder="Nhập địa chỉ thanh toán"
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <Button
                className="text-dark font-weight-bold btn-light w-100"
                style={{ backgroundColor: "#f5f7f9" }}
                onClick={handlePayment}
              >
                <small className="font-weight-bold">Thanh toán</small>
              </Button>

              <Button
                className="text-dark font-weight-bold btn-light w-100 ml-2"
                style={{ backgroundColor: "#f5f7f9" }}
                onClick={handleCancelPayment}
              >
                <small className="font-weight-bold">Huỷ thanh toán</small>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayViaVnPay;
