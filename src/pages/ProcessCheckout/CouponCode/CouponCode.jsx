import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CouponCode(props) {
// Lấy dữ liệu từ Local Storage
const dataJson = localStorage.getItem('userData');

const data = JSON.parse(dataJson);

console.log(data.fullName); // Truy cập thuộc tính fullName từ dữ liệu đã lưu trong Local Storage
  const navigate = useNavigate();
  if(data){
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
            <div className="step">
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

          <div className="border rounded-3 p-2 mb-3 d-flex align-items-center">
            <div className="input-group mb-2 flex-fill">
              <span className="input-group-text bg-danger text-white border-right-0">
                <i className="fa fa-tags"></i>
              </span>
              <input
                type="text"
                className="form-control border-left-0 mr-1"
                placeholder="Mã giảm giá"
              />
            </div>
            <button type="button" className="btn btn-danger mb-2">
              Áp dụng
            </button>
          </div>
          <div className="border rounded-2 p-3">
            <h4 className="font-weight-bold mb-2 text-center">
              THÔNG TIN ĐẶT HÀNG
            </h4>

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
              <span className="font-weight-normal">Địa chỉ nhận hàng:</span> {data.address.apartment_number}, {data.address.wards}
            </p>
            <p className="font-weight-bold">
              <span className="font-weight-normal">Tiền hàng:</span> 1.000.000đ
            </p>
          </div>
          <input
            type="button"
            className="btn btn-danger btn-block py-2 mt-2"
            value="Tiếp tục"
            onClick={() => navigate("/process-checkout/payment")}
          />
        </div>
      </article>
    </div>
  );
}
}

export default CouponCode;
