import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import axios from "axios";
import EditAddress from "./EditAddress/EditAddress";
import "./ViewMyAddress.css";

const ViewMyAddress = () => {
  const [addressData, setAddressData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editAddressData, setEditAddressData] = useState(null);

  useEffect(() => {
    fetchAddressData();
  }, []);

  const fetchAddressData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setAddressData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (addressData) => {
    setModalVisible(true);
    setEditAddressData(addressData);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  if (addressData) {
    return (
      <div className="card p-3 py-3 mt-3 card-1 text-center body-my-address container rounded-2">
        <h4>Địa Chỉ Giao Hàng</h4>
        <div className="p-3 card-2">
          <div className="p-3 card-child">
            <div className="d-flex flex-row align-items-center">
              <span className="circle">
                <i className="fa fa-home"></i>
              </span>
              <div className="d-flex flex-column ms-3">
                <h6 className="fw-bold">
                  {addressData.number} {addressData.street}, {addressData.ward},{" "}
                  {addressData.district}, {addressData.city}
                </h6>
              </div>
            </div>
          </div>
          <Button
            onClick={() => openModal(addressData)}
            className="btn-danger bg-danger mt-2"
          >
            Chỉnh sửa địa chỉ
          </Button>
        </div>

        <Modal
          open={modalVisible}
          onCancel={closeModal}
          title="Chỉnh sửa địa chỉ"
          footer={null}
        >
          <EditAddress onCancel={closeModal} addressData={editAddressData} />
        </Modal>
      </div>
    );
  }

  return null;
};

export default ViewMyAddress;
