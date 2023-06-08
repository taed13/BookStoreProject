import React, { useState, useEffect } from "react";
import axios from "../../api/axiosClient";
import addressData from "./vietnam-address.json";
import { Link, useNavigate } from "react-router-dom";
import "./ProcessCheckout.css";

function ProcessCheckout() {
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
    const selectedProvinceData = addressData.provinces.find(
      (province) => province.name === selectedProvince
    );
    setDistricts(selectedProvinceData?.districts || []);
    setSelectedDistrict("");
    setWards([]);
  };
  
  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    const selectedProvinceData = addressData.provinces.find(
      (province) => province.name === selectedProvince
    );
    const selectedDistrictData = selectedProvinceData?.districts.find(
      (district) => district.name === selectedDistrict
    );
    setWards(selectedDistrictData?.wards || []);
  };
  
  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    setSelectedWard(selectedWard);
  };
  
  const handleAddressChange = (e) => {
    const address = e.target.value;
    setAddress(address);
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


  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      address: {
        houseNumber: address,
        ward: wards,
        district: districts,
        province: provinces
      },
      note: note
    };

    axios
      .post("/posts", data)
      .then((response) => {
        // Xử lý kết quả từ backend (nếu cần)
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
