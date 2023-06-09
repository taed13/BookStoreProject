import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const dataJson = localStorage.getItem('userData');


  const handleContinue = () => {
    if (paymentMethod === "vnpay") {
      navigate("/process-checkout/pay-via-vnpay");
    } else if (paymentMethod === "cashOnDelivery") {
      navigate("/process-checkout/complete");
    } else {
      message.error("Vui lòng chọn hình thức thanh toán!");
    }
  };

  const data = JSON.parse(dataJson);

  return (
    <div className="container p-0 mt-5" style={{ width: "40%" }}>
      <article className="card rounded-3">
        <div className="card-body">
          <div className="track">
            <div className="step active">
              <span className="icon">
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </span>{" "}
              <span className="text">
                <small style={{ fontSize: "0.71rem" }}>Chọn sản phẩm</small>
              </span>
            </div>
            <div className="step active">
              <span className="icon">
                {" "}
                <i className="fa fa-info-circle"></i>{" "}
              </span>{" "}
              <span className="text">
                <small style={{ fontSize: "0.71rem" }}>
                  Thông tin đặt hàng
                </small>
              </span>
            </div>
            <div className="step active">
              <span className="icon">
                {" "}
                <i className="fa fa-tags"></i>{" "}
              </span>{" "}
              <span className="text">
                <small style={{ fontSize: "0.71rem" }}>Phiếu giảm giá</small>
              </span>
            </div>
            <div className="step active">
              <span className="icon">
                {" "}
                <i className="fa fa-credit-card"></i>{" "}
              </span>{" "}
              <span className="text">
                <small style={{ fontSize: "0.71rem" }}>Thanh toán</small>
              </span>
            </div>
            <div className="step">
              <span className="icon">
                {" "}
                <i className="fa fa-check-circle"></i>{" "}
              </span>{" "}
              <span className="text">
                <small style={{ fontSize: "0.71rem" }}>Hoàn tất đặt hàng</small>
              </span>
            </div>
          </div>
          <hr />
          <div className="border rounded-2 p-3">
            <div className="border rounded-2 p-3">
              <h4 className="font-weight-bold mb-2 text-center">
                THÔNG TIN ĐẶT HÀNG
              </h4>

              <p className="font-weight-bold">
                <span className="font-weight-normal">Mã đơn hàng:</span>{" "}
                123456789
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Người Đặt:</span> {data.fullName}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Số điện thoại:</span>
                {data.phoneNumber}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Email:</span>
                {data.email}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Địa chỉ nhận hàng:</span>{data.address.apartment_number}, {data.address.wards}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Tiền hàng:</span>
              
              </p>
            </div>

            <div className="form-group mt-2">
              <label className="font-weight-bold">Hình thức thanh toán</label>
              <div className="payment-option d-flex flex-wrap">
                <div className="payment-item border rounded-3 p-2 text-center">
                  <label htmlFor="cashOnDelivery">
                    <span>Thanh toán khi nhận hàng</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/COD.7245762.png"
                      alt="cps-img"
                    />
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      onChange={handlePaymentMethodChange}
                    />
                  </label>
                </div>
                <div className="payment-item border rounded-3 p-2 text-center">
                  <label htmlFor="vnpay">
                    <span>Thanh toán qua VNPay</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/vnpay.c0bd59b.png"
                      alt="vnpay-img"
                    />
                    <input
                      type="radio"
                      id="vnpay"
                      name="paymentMethod"
                      value="vnpay"
                      onChange={handlePaymentMethodChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <input
            type="button"
            className="btn btn-danger btn-block py-2 mt-2"
            value="Tiếp tục"
            onClick={handleContinue}
          />
        </div>
      </article>
    </div>
  );
}

export default Payment;
