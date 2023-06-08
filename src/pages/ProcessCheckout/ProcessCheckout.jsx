import React, { useState, useEffect } from "react";
import axios from "../../api/axiosClient";
import addressArray from "./vietnam-address.json";
import { Link, useNavigate } from "react-router-dom";
import "./ProcessCheckout.css";

import { message } from "antd";


import CouponCode from "./CouponCode/CouponCode";

// import addressData from './vietnam_address.json';

// Chuyển đổi đối tượng thành mảng

function ProcessCheckout() {

  const addressData = Object.values(addressArray);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Đọc dữ liệu từ tệp JSON và cập nhật state
    setProvinces(addressData.provinces);
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    const selectedProvinceData = Object.values(addressData).find(
      (province) => province.name === selectedProvince
    );
    setDistricts(
      selectedProvinceData?.["quan_huyen"]
        ? Object.values(selectedProvinceData["quan_huyen"])
        : []
    );
    setSelectedDistrict("");
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    const selectedProvinceData = addressData.find(
      (province) => province.name === selectedProvince
    );
    const selectedDistrictData = selectedProvinceData?.districts.find(
      (district) => district.name === selectedDistrict
    );
    setWards(selectedDistrictData?.xa_phuong || []);
  };

  const handleWardChange = (event) => {
    setSelectedWard(event.target.value);
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    // Perform validations
    if (fullName.trim() === "") {
      message.error("Please enter your full name.");
      return;
    }

    if (phoneNumber.trim() === "") {
      message.error("Please enter your phone number.");
      return;
    }

    // Validate phone number format (Vietnamese phone number: 10 digits, starts with 0)
    const phoneRegex = /^(0[0-9]{9})$/;
    if (!phoneRegex.test(phoneNumber)) {
      message.error("Please enter a valid Vietnamese phone number format (e.g., 0967496219).");
      return;
    }

    if (email.trim() === "") {
      message.error("Please enter your email address.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error("Please enter a valid email address.");
      return;
    }

    if (selectedProvince === "") {
      message.error("Please select a province.");
      return;
    }

    if (selectedDistrict === "") {
      message.error("Please select a district.");
      return;
    }

    if (selectedWard === "") {
      message.error("Please select a ward.");
      return;
    }

    if (address.trim() === "") {
      message.error("Please enter your address.");
      return;
    }

    // All fields are valid, proceed with form submission

    const data = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,

      address: {
        apartment_number: address,
        wards: ` ${selectedWard}`,
      },
      note: note
    };
    axios
      .post("/posts", data)
      .then((response) => {
        // Xử lý kết quả từ backend (nếu cần)
        // Chuyển đổi đối tượng data thành chuỗi JSON
        const dataJson = JSON.stringify(data);

        // Lưu chuỗi JSON vào Local Storage với khóa 'userData'
        localStorage.setItem('userData', dataJson);
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });

    navigate("/process-checkout/coupon-code");
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
            value={fullName}
            onChange={handleFullNameChange}
          />
          <input
            type="text"
            className="form-control mb-2 w-100"
            placeholder="Số điện thoại (bắt buộc)"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <input
            type="text"
            className="form-control mb-2 w-100"
            placeholder="Email (Vui lòng điền email để nhận hoá đơn VAT)"
            value={email}
            onChange={handleEmailChange}
          />

          <h5 className="font-weight-bold mb-2">Địa chỉ nhận hàng</h5>
          <div className="row">
            <div className="col">
              <select
                value={selectedProvince.name}
                onChange={handleProvinceChange}
                className="form-control mb-2 w-100"
              >
                <option value="">Chọn tỉnh</option>
                {Object.entries(addressData).map(([code, province]) => (
                  <option key={code} value={code}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <select
                value={selectedDistrict.name}
                onChange={handleDistrictChange}
                className="form-control mb-2 w-100"
              >
                <option value="">Chọn quận, huyện</option>

                {selectedProvince &&
                  addressData[selectedProvince]["quan-huyen"] &&
                  Object.entries(
                    addressData[selectedProvince]["quan-huyen"]
                  ).map(([code, district]) => (
                    <option key={code} value={code}>
                      {district.name}
                    </option>
                  ))}

                {selectedProvince && addressData[selectedProvince]["quan_huyen"] && Object.entries(addressData[selectedProvince]["quan_huyen"]).map(([code, district]) => (
                  <option key={code} value={code}>
                    {district.name}
                  </option>
                ))}


              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <select
                value={selectedWard.name}
                onChange={handleWardChange}
                className="form-control mb-2 w-100"
              >
                <option value="">Chọn phường, xã</option>
                {selectedProvince &&
                  addressData[selectedProvince] &&
                  addressData[selectedProvince]["quan_huyen"] &&
                  selectedDistrict &&
                  addressData[selectedProvince]["quan_huyen"][selectedDistrict]["xa_phuong"] &&
                  Object.entries(
                    addressData[selectedProvince]["quan_huyen"][selectedDistrict]["xa_phuong"]
                  ).map(([code, ward]) => (
                    <option key={code} value={ward.path_with_type}>
                      {ward.name}
                    </option>
                  ))}
              </select>

            </div>
            <div className="col">
              <input
                type="text"
                className="form-control mb-2 w-100"
                placeholder="Số nhà, tên đường"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <textarea
            className="form-control mb-2 w-100"
            placeholder="Ghi chú đơn hàng (không bắt buộc)"
            rows="3"
            value={note}
            onChange={handleNoteChange}
          ></textarea>

          <input
            type="button"
            className="btn btn-danger btn-block py-2"
            value="Tiếp tục"
            onClick={handleSubmit}
          />
        </div>
      </article>
    </div>

  );

}

export default ProcessCheckout;
