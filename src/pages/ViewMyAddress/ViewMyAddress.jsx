import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import './ViewMyAddress.css';
import AddNewAddress from './AddNewAddress/AddNewAddress';
import axios from 'axios';

const ViewMyAddress = () => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    fetchAddressData();
  }, []);

  const fetchAddressData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setAddressData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  if(addressData) 
 {
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
              <h6 className="fw-bold">{addressData.id}</h6>
              <span>{addressData.id}</span>
            </div>
          </div>
        </div>
        <div className="p-3 card-child mt-4">
          <div className="d-flex flex-row align-items-center">
            <span className="circle-2">
              <i className="fa fa-bank"></i>
            </span>
            <div className="d-flex flex-column ms-3">
              <h6 className="fw-bold">Office</h6>
              <span>3432, Awesome Tail lane, <br />First Floor, NY, 43434</span>
            </div>
          </div>
        </div>
        <div className="p-3 card-child mt-4 py-4" onClick={openModal}>
          <div className="d-flex flex-row align-items-center">
            <span className="circle-3">
              <i className="fa fa-plus"></i>
            </span>
            <div className="d-flex flex-column ms-3 mt-1">
              <h6 className="fw-bold" style={{ color: '#9A6B73'}}>Add New Address</h6>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Address Modal"
        className="custom-modal"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            position: 'static',
            maxHeight: '90vh',
            overflow: 'auto',
            padding: '20px',
          },
        }}
      >
        <AddNewAddress closeModal={closeModal} />
      </Modal>
    </div>
  );
};
}

export default ViewMyAddress;