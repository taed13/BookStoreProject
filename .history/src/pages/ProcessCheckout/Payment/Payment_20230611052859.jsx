import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message, Radio, Button } from "antd";
// import axios from "axios"; // Import Axios
import axios from "../../../api/axiosClient";

import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  const fetchOrderInfo = () => {
    axios
      .get("/bill")
      .then((response) => {
        setOrderInfo(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error(
          "Failed to fetch order information:",
          error
        );
      });
  };
  const data_id = {
    bill_id: orderInfo.id,
    user_id: orderInfo.userId,
  };
  const handleContinue = () => {
    // Make a GET request using Axios
    axios
      .get("/payments/create_payment", {
        params: {
          billId: data_id.bill_id,
          userId: data_id.user_id,
        },
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        navigate(`${response.data.url}`);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        message.error("Đã xảy ra lỗi khi xử lý đơn hàng!");
      });
  };

  return (
    <div
      className='container p-0 mt-3'
      style={{ width: "40%" }}
    >
      <article className='card rounded-3'>
        <div className='card-body'>
          <div className='track'>
            <div className='step active'>
              <span className='icon'>
                {" "}
                <i className='fa fa-shopping-cart'></i>{" "}
              </span>{" "}
              <span className='text'>
                <small style={{ fontSize: "0.71rem" }}>
                  Chọn sản phẩm
                </small>
              </span>
            </div>
            <div className='step active'>
              <span className='icon'>
                {" "}
                <i className='fa fa-info-circle'></i>{" "}
              </span>{" "}
              <span className='text'>
                <small style={{ fontSize: "0.71rem" }}>
                  Thông tin đặt hàng
                </small>
              </span>
            </div>
            <div className='step active'>
              <span className='icon'>
                {" "}
                <i className='fa fa-tags'></i>{" "}
              </span>{" "}
              <span className='text'>
                <small style={{ fontSize: "0.71rem" }}>
                  Phiếu giảm giá
                </small>
              </span>
            </div>
            <div className='step active'>
              <span className='icon'>
                {" "}
                <i className='fa fa-credit-card'></i>{" "}
              </span>{" "}
              <span className='text'>
                <small style={{ fontSize: "0.71rem" }}>
                  Thanh toán
                </small>
              </span>
            </div>
            <div className='step'>
              <span className='icon'>
                {" "}
                <i className='fa fa-check-circle'></i>{" "}
              </span>{" "}
              <span className='text'>
                <small style={{ fontSize: "0.71rem" }}>
                  Hoàn tất đặt hàng
                </small>
              </span>
            </div>
          </div>
          <hr />
          <div className='border rounded-2 p-3'>
            <div className='border rounded-2 p-3'>
              <h4 className='font-weight-bold mb-2 text-center'>
                THÔNG TIN ĐẶT HÀNG
              </h4>

              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Mã đơn hàng:
                </span>
                {orderInfo.id}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Người Đặt:
                </span>
                {orderInfo.name}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Số điện thoại:
                </span>
                {orderInfo.phone}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Email:
                </span>
                {orderInfo.username}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Địa chỉ nhận hàng:
                </span>
                {orderInfo.address}
              </p>
              <p className='font-weight-bold'>
                <span className='font-weight-normal'>
                  Tiền hàng:
                </span>
                {orderInfo.totalMoney}
              </p>
            </div>

            <div className='form-group mt-2'>
              <label className='font-weight-bold'>
                Hình thức thanh toán
              </label>
              <Radio.Group
                onChange={handlePaymentMethodChange}
                value={paymentMethod}
              >
                <div className='d-flex align-items-center'>
                  <div className='radio-wrapper'>
                    <label htmlFor='cashOnDelivery'>
                      <div className='radio-image text-center'>
                        <Radio.Button
                          id='cashOnDelivery'
                          value='cashOnDelivery'
                          className='radio-button h-100'
                        >
                          <span className=''>
                            <div className='d-flex align-items-center'>
                              <img
                                src='https://cellphones.com.vn/cart/_nuxt/img/COD.7245762.png'
                                alt='cash-on-delivery'
                                style={{
                                  height: "30px",
                                  marginRight: "8px",
                                }}
                                className=''
                              />
                              <span>
                                Thanh toán khi nhận hàng
                              </span>
                            </div>
                          </span>
                        </Radio.Button>
                      </div>
                    </label>
                  </div>
                  <div className='radio-wrapper'>
                    <label htmlFor='vnpay'>
                      <div className='radio-image text-center'>
                        <Radio.Button
                          id='vnpay'
                          value='vnpay'
                          className='radio-button h-100'
                        >
                          <span>
                            <div className='d-flex align-items-center'>
                              <img
                                src='https://cellphones.com.vn/cart/_nuxt/img/vnpay.c0bd59b.png'
                                alt='vnpay'
                                style={{
                                  height: "30px",
                                  marginRight: "8px",
                                }}
                                className=''
                              />
                              <span>
                                Thanh toán qua VNPay
                              </span>
                            </div>
                          </span>
                        </Radio.Button>
                      </div>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </div>
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

export default Payment;
