import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button, Input, Select, notification } from "antd";
import axios from "../../api/axiosClient";
import "./CouponCode.css";

const { Option } = Select;

function CouponCode(props) {
  const dataJson = localStorage.getItem("userData");
  const data = JSON.parse(dataJson);

  const [couponCode, setCouponCode] = useState("");
  const [deliveryService, setDeliveryService] =
    useState("");
  const [couponCodeInput, setCouponCodeInput] =
    useState("");
  const [couponCodeSelect, setCouponCodeSelect] =
    useState("");

  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  const fetchOrderInfo = () => {
    axios
      .get("/bill")
      .then((response) => {
        setOrderInfo(response.data);
      })
      .catch((error) => {
        console.error(
          "Failed to fetch order information:",
          error
        );
      });
  };

  const handleContinue = () => {
    navigate("/process-checkout/payment");
  };

  const handleApplyCoupon = () => {
    if (!couponCodeInput) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng nhập mã giảm giá",
        className: "notification-container",
      });
    } else {
      // Perform the coupon code validation logic here
      axios
        .post("/api/coupons", { code: couponCodeInput })
        .then((response) => {
          // Handle the response data from the server (if any)
          // Example: Display success notification, update state
        })
        .catch((error) => {
          // Handle the error if any
          // Example: Display error notification
        });
    }
  };

  const handleApplyDiscountCode = () => {
    if (!couponCodeSelect) {
      notification.error({
        message: "Lỗi",
        description:
          "Vui lòng nhập mã giảm giá khách hàng thân thiết",
        className: "notification-container",
      });
    } else {
      // Perform the discount code validation logic here
      axios
        .put("/api/discount-codes", {
          code: couponCodeSelect,
        })
        .then((response) => {
          // Handle the response data from the server (if any)
          // Example: Display success notification, update state
        })
        .catch((error) => {
          // Handle the error if any
          // Example: Display error notification
        });
    }
  };

  const navigate = useNavigate();

  if (orderInfo) {
    const {
      name,
      phone,
      username,
      address,
      shippingCost,
      totalMoney,
    } = orderInfo;

    return (
      <div
        className='container p-0 mt-5'
        style={{ width: "40%" }}
      >
        <article className='card rounded-3'>
          <div className='card-body'>
            <div className='track'>
              <div className='step active'>
                <span className='icon'>
                  <i className='fa fa-shopping-cart'></i>
                </span>
                <span className='text'>
                  <small style={{ fontSize: "0.71rem" }}>
                    Chọn sản phẩm
                  </small>
                </span>
              </div>
              <div className='step active'>
                <span className='icon'>
                  <i className='fa fa-info-circle'></i>
                </span>
                <span className='text'>
                  <small style={{ fontSize: "0.71rem" }}>
                    Thông tin đặt hàng
                  </small>
                </span>
              </div>
              <div className='step active'>
                <span className='icon'>
                  <i className='fa fa-tags'></i>
                </span>
                <span className='text'>
                  <small style={{ fontSize: "0.71rem" }}>
                    Phiếu giảm giá
                  </small>
                </span>
              </div>
              <div className='step'>
                <span className='icon'>
                  <i className='fa fa-credit-card'></i>
                </span>
                <span className='text'>
                  <small style={{ fontSize: "0.71rem" }}>
                    Thanh toán
                  </small>
                </span>
              </div>
              <div className='step'>
                <span className='icon'>
                  <i className='fa fa-check-circle'></i>
                </span>
                <span className='text'>
                  <small style={{ fontSize: "0.71rem" }}>
                    Hoàn tất đặt hàng
                  </small>
                </span>
              </div>
            </div>
            <hr />

            <div className='border rounded-3 p-2 mb-3 d-flex align-items-center'>
              <div className='input-group mb-2 flex-fill d-flex align-items-center'>
                <span className='input-group-text bg-danger text-white border-right-0'>
                  <i className='fa fa-tags'></i>
                </span>
                <input
                  type='text'
                  className='form-control border-left-0 mr-1'
                  placeholder='Mã giảm giá'
                  value={couponCodeInput}
                  onChange={(e) =>
                    setCouponCodeInput(e.target.value)
                  }
                />
              </div>
              <button
                type='button'
                className='btn btn-danger mb-2'
                onClick={handleApplyCoupon}
              >
                Áp dụng
              </button>
            </div>
            <div className='border rounded-3 p-2 mb-3 d-flex align-items-center'>
              <div className='input-group mb-2 flex-fill d-flex align-items-center'>
                <span className='input-group-text bg-danger text-white border-right-0'>
                  <i className='fa fa-tags'></i>
                </span>
                <select
                  className='form-control border mr-1 h-100 w-25'
                  value={couponCodeSelect}
                  onChange={(e) =>
                    setCouponCodeSelect(e.target.value)
                  }
                >
                  <option value=''>
                    Giảm giá khách hàng thân thiết
                  </option>
                  <option value='15%'>Giảm 15%</option>
                  <option value='20%'>Giảm 20%</option>
                </select>
              </div>
              <button
                type='button'
                className='btn btn-danger mb-2'
                onClick={handleApplyDiscountCode}
              >
                Áp dụng
              </button>
            </div>

            <div className='border rounded-2 p-3'>
              <h4 className='font-weight-bold mb-2 text-center'>
                THÔNG TIN ĐẶT HÀNG
              </h4>

              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Người Đặt:
                </span>{" "}
                {name}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Số điện thoại:
                </span>
                {phone}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Email:
                </span>
                {username}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Địa chỉ nhận hàng:
                </span>{" "}
                {address}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Phí ship:
                </span>{" "}
                {shippingCost}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Tổng tiền hàng:
                </span>
                {totalMoney}
                1.000
              </p>
            </div>
            <input
              type='button'
              className='btn btn-danger btn-block py-2 mt-2'
              value='Tiếp tục'
              onClick={handleContinue}
            />
          </div>
        </article>
      </div>
    );
  }
}

export default CouponCode;
