import React, { useState, useEffect } from "react";
import axios from "../../api/axiosClient";
import addressArray from "./vietnam-address.json";
import { Link, useNavigate } from "react-router-dom";
import "./ProcessCheckout.css";



import { message } from "antd";
import { Button, Input, Select, notification } from "antd";
import CouponCode from "./CouponCode/CouponCode";

const { Option } = Select;

// import addressData from './vietnam_address.json';
// Chuyển đổi đối tượng thành mảng
const showWaitingForm = () => {
  // Tạo một div chứa form waiting
  const waitingFormDiv = document.createElement("div");
  waitingFormDiv.className = "waiting-form";

  // Tạo nội dung cho form waiting
  const waitingText = document.createElement("p");
  waitingText.textContent = "Please wait...";

  // Thêm nội dung vào div chứa form waiting
  waitingFormDiv.appendChild(waitingText);

  // Thêm div chứa form waiting vào body của trang
  document.body.appendChild(waitingFormDiv);
};

function ProcessCheckout() {
  localStorage.clear();

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
  const [deliveryService, setDeliveryService] = useState("");

  useEffect(() => {
    setProvinces(addressData); // Set provinces from addressData
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    const selectedProvinceData = addressData.find(
      (province) => province.name === selectedProvince
    );
    setDistricts(
      selectedProvinceData?.quan_huyen
        ? Object.values(selectedProvinceData.quan_huyen)
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
    const selectedDistrictData = selectedProvinceData?.quan_huyen.find(
      (district) => district.name === selectedDistrict
    );
    setWards(selectedDistrictData?.xa_phuong || []);
  };

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
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
  const formatAddress = (address) => {
    // Tách các từ trong địa chỉ
    const words = address.trim().split(" ");

    // Chuyển đổi chữ cái đầu tiên của mỗi từ thành chữ in hoa
    const formattedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Ghép các từ lại thành định dạng địa chỉ
    const formattedAddress = formattedWords.join(" ");

    return formattedAddress;
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
      message.error(
        "Please enter a valid Vietnamese phone number format (e.g., 0967496219)."
      );
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
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id; //
    // Hàm xóa một sản phẩm khỏi giỏ hàng
    // All fields are valid, proceed with form submission

    if (!deliveryService) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng chọn dịch vụ giao hàng",
        className: "notification-container",
      });
      return;
    }

    // All fields are valid, proceed with form submission
    const formattedAddress = formatAddress(address);

    const data = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      addressLine1: `${formattedAddress}, ${selectedWard}, ${selectedDistrict}, ${selectedProvince}`,
      note: note,
    };

    axios
      .post("/address", data)
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
      showWaitingForm();
      const checkDataInterval = setInterval(() => {
        if (localStorage.getItem('userData')) {
          clearInterval(checkDataInterval); // Dừng kiểm tra định kỳ
          navigate('/process-checkout/coupon-code'); // Chuyển đến trang coupon-code nếu dữ liệu đã tồn tại
        }
      }, 500);
  };
  const handleButtonDelivery = () => {
    if (!deliveryService) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng chọn dịch vụ giao hàng",
        className: "notification-container",
      });
    } else {
      notification.success({
        message: "Thành công",
        description: `Dịch vụ giao hàng: ${deliveryService}`,
        className: "notification-container",
      });
    }
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
          <div className="border rounded-3 p-2 mb-3 d-flex align-items-center flex-fill">
            <div className="input-group mb-2 d-flex align-items-center flex-fill">
              <span className="input-group-text bg-danger text-white border-right-0">
                <i className="fa fa-tags"></i>
              </span>
              <Select
                className="mx-1 h-100 flex-fill"
                value={deliveryService}
                onChange={(value) => setDeliveryService(value)}
                placeholder="Dịch vụ giao hàng"
              >
                <Option value="">Dịch vụ giao hàng</Option>
                <Option value="express">Chuyển phát nhanh</Option>
                <Option value="standard">Chuyển phát thường</Option>
              </Select>
            </div>
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={handleButtonDelivery}
            >
              Áp dụng
            </button>
          </div>
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

                {selectedProvince &&
                  addressData[selectedProvince]["quan_huyen"] &&
                  Object.entries(
                    addressData[selectedProvince]["quan_huyen"]
                  ).map(([code, district]) => (
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

                  addressData[selectedProvince]["quan_huyen"][selectedDistrict][
                    "xa_phuong"
                  ] &&
                  Object.entries(
                    addressData[selectedProvince]["quan_huyen"][
                      selectedDistrict
                    ]["xa_phuong"]

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
