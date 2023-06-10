import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Complete.css";
import ProductPayment from "../../../components/ProductPayment/ProductPayment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Complete() {
  const dataJson = localStorage.getItem('userData');

  const data = JSON.parse(dataJson);
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(true); // Set initial value to true for successful order
  let paymentMethod = "";

  const handlePaymentMethodChange = (event) => {
    paymentMethod = event.target.value;
  };

  // Function to handle order placement (You need to implement this logic)
  const placeOrder = () => {
    // Logic to place the order
    // Set orderSuccess based on the result
    setOrderSuccess(/* result of order placement process */);
  };

  return (
    <div
      className={`container p-0 mt-5 ${orderSuccess ? "" : "order-failure"}`}
      style={{ width: "40%" }}
    >
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
            <div className="step active">
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
            <span>
              <p>
                Cảm ơn Quý khách chọn mua hàng tại Sách Việt. Trong 15 phút vui
                lòng xem Zalo / SMS hoặc cuộc gọi từ Sách Việt để kiểm tra thông
                tin đơn hàng.
              </p>
            </span>
            <span>
              <p>
                <i>
                  *Các đơn hàng từ 21h30 tối tới 8h sáng hôm sau, Sách Việt sẽ
                  liên hệ với Quý khách trước 10 trưa cùng ngày. Thân ái!
                </i>
              </p>
            </span>
            <div
              className={`border rounded-4 p-3 ${
                orderSuccess ? "successful-order" : "unsuccessful-order"
              }`}
            >
              <h4 className="font-weight-bold mb-4 text-center">
                {orderSuccess
                  ? "ĐẶT HÀNG THÀNH CÔNG"
                  : "ĐẶT HÀNG KHÔNG THÀNH CÔNG"}
              </h4>

              <p className="font-weight-bold">
                <span className="font-weight-normal">Mã đơn hàng:</span>{" "}
                123456789
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Người Đặt:</span> {data.fullName}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Số điện thoại:</span>{data.phoneNumber}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Email:</span>{" "}
                {data.email}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Địa chỉ nhận hàng:</span>
                {data.address.apartment_number}, {data.address.wards}
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">
                  Phương thức thanh toán:
                </span>{" "}
                Thanh toán khi nhận hàng
              </p>
              <p className="font-weight-bold">
                <span className="font-weight-normal">Tiền hàng:</span>{" "}
                1.000.000đ
              </p>
            </div>

            <div className="form-group mt-2">
              <ProductPayment />
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="p-2" style={{ flexBasis: "50%" }}>
              <button
                className="btn btn-danger btn-block py-2 mt-2 d-flex flex-column align-items-center"
                onClick={() => navigate("/process-checkout/complete")}
              >
                <div>Kiểm tra đơn hàng</div>
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              </button>
            </div>
            <div className="p-2" style={{ flexBasis: "50%" }}>
              <button
                className="btn btn-danger btn-block py-2 mt-2 d-flex flex-column align-items-center"
                onClick={() => navigate("/process-checkout/complete")}
              >
                <div>Tiếp tục mua hàng</div>
                <div>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Complete;
