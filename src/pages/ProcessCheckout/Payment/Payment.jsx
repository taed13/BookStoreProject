import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Payment.css';

function Payment() {
  const navigate = useNavigate();
  let paymentMethod = "";

  const handlePaymentMethodChange = (event) => {
    paymentMethod = event.target.value;
  };


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
                <span className="font-weight-normal">Người Đặt:</span> Lê Tiến
                Đạt
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Số điện thoại:</span>{" "}
                0987654321
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Email:</span>{" "}
                tiendatpot@gmail.com
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Địa chỉ nhận hàng:</span>{" "}
                123 Nguyễn Văn Cừ, Quận 5, TP.HCM
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Tiền hàng:</span>{" "}
                1.000.000đ
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
                  <label htmlFor="bankTransfer">
                    <span>Thanh toán chuyển khoản</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/transfer.3133aad.png"
                      alt="bank-transfer-img"
                    />
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="paymentMethod"
                      value="bankTransfer"
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
                <div className="payment-item border rounded-3 p-2 text-center">
                  <label htmlFor="moca">
                    <span>Thanh toán qua Moca</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/moca.f4be0b9.png"
                      alt="moca-img"
                    />
                    <input
                      type="radio"
                      id="moca"
                      name="paymentMethod"
                      value="moca"
                      onChange={handlePaymentMethodChange}
                    />
                  </label>
                </div>
                <div className="payment-item border rounded-3 p-2 text-center">
                  <label htmlFor="zalopay">
                    <span>Thanh toán qua ZaloPay</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/zalopay.08ce522.png"
                      alt="zalopay-img"
                    />
                    <input
                      type="radio"
                      id="zalopay"
                      name="paymentMethod"
                      value="zalopay"
                      onChange={handlePaymentMethodChange}
                    />
                  </label>
                </div>
                <div className="payment-item border rounded-3 p-2 text-center">
                  <label htmlFor="shopeepay">
                    <span>Thanh toán qua ShopeePay</span>
                    <img
                      src="https://cellphones.com.vn/cart/_nuxt/img/ShopeePay-New-Logo.0d32640.png"
                      alt="shopeepay-img"
                    />
                    <input
                      type="radio"
                      id="shopeepay"
                      name="paymentMethod"
                      value="shopeepay"
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
            onClick={() => navigate("/process-checkout/complete")}

          />
        </div>
      </article>
    </div>
  );
}

export default Payment;