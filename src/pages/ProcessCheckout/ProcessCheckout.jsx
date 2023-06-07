import React from "react";
import { useState, useEffect } from "react";
import addressData from "./vietnam-address.json";
import { Link, useNavigate } from "react-router-dom";
import "./ProcessCheckout.css";

function ProcessCheckout() {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  useEffect(() => {
    // Đọc dữ liệu từ tệp JSON và cập nhật state
    setProvinces(addressData.provinces);
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    const selectedProvinceData = provinces.find(
      (province) => province.name === selectedProvince
    );
    setDistricts(selectedProvinceData?.districts || []);
    setSelectedDistrict("");
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    const selectedDistrictData = districts.find(
      (district) => district === selectedDistrict
    );
    setWards(selectedDistrictData?.wards || []);
  };

  const navigate = useNavigate();

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
            <div className="step">
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
          <h5 className="font-weight-bold mb-2">Thông tin khách hàng</h5>

          <input
            type="text"
            className="form-control mb-2 w-100"
            placeholder="Họ và tên (bắt buộc)"
          />
          <input
            type="text"
            className="form-control mb-2 w-100"
            placeholder="Số điện thoại (bắt buộc)"
          />
          <input
            type="text"
            className="form-control mb-2 w-100"
            placeholder="Email (Vui lòng điền email để nhận hoá đơn VAT)"
          />

          <h5 className="font-weight-bold mb-2">Địa chỉ nhận hàng</h5>
          <div className="row">
            <div className="col">
              <select
                value={selectedProvince}
                onChange={handleProvinceChange}
                className="form-control mb-2 w-100"
              >
                <option value="">Chọn tỉnh</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="form-control mb-2 w-100"
              >
                <option value="">Chọn quận, huyện</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <select className="form-control mb-2 w-100">
                <option value="">Chọn phường, xã</option>
                {wards.map((ward, index) => (
                  <option key={index} value={ward}>
                    {ward}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control mb-2 w-100"
                placeholder="Số nhà, tên đường"
              />
            </div>
          </div>
          <textarea
            className="form-control mb-2 w-100"
            placeholder="Ghi chú đơn hàng (không bắt buộc)"
            rows="3"
          ></textarea>

          <input
            type="button"
            className="btn btn-danger btn-block py-2"
            value="Tiếp tục"
            onClick={() => navigate("/process-checkout/coupon-code")}
          />
        </div>
      </article>
    </div>
  );
}

export default ProcessCheckout;
