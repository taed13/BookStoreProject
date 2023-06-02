import React from 'react';
import { Link } from 'react-router-dom';
import './DetailMyPurchase.css';

const DetailMyPurchase = () => {
  const orderQuantity = 2; // Số lượng đặt hàng

  return (
    <div className="container p-0 mt-5">
      <article className="card">
        <header className="card-header"> My Orders / Tracking </header>
        <div className="card-body">
          <h6>ID Hoá đơn: OD45345345435</h6>
          <article className="card">
            <div className="card-body row">
              <div className="col">
                <strong>Estimated Delivery time:</strong> <br />
                29 nov 2019
              </div>
              <div className="col">
                <strong>Shipping BY:</strong> <br />
                BLUEDART, | <i className="fa fa-phone"></i> +1598675986
              </div>
              <div className="col">
                <strong>Status:</strong> <br />
                Picked by the courier
              </div>
              <div className="col">
                <strong>Tracking #:</strong> <br />
                BD045903594059
              </div>
            </div>
          </article>
          <div className="track">
            <div className="step active">
              <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span>
            </div>
            <div className="step active">
              <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span>
            </div>
            <div className="step">
              <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span>
            </div>
            <div className="step">
              <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span>
            </div>
          </div>
          <hr />
          <ul className="row">
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border" alt="Dell Laptop" />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">Dell Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$950 </span>
                  <p className="text-muted">Số lượng: {orderQuantity === 1 ? 'x1' : 'x2'}</p> {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" alt="HP Laptop" />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$850 </span>
                  <p className="text-muted">Số lượng: {orderQuantity === 1 ? 'x1' : 'x2'}</p> {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" alt="ACER Laptop" />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$650 </span>
                  <p className="text-muted">Số lượng: {orderQuantity === 1 ? 'x1' : 'x2'}</p> {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
          </ul>
          <hr />
          <Link to="/my-account/detail/my-purchases" className="btn btn-warning" data-abc="true">
            <i className="fa fa-chevron-left"></i> Trở về danh sách đơn hàng
          </Link>
        </div>
      </article>
    </div>
  );
};

export default DetailMyPurchase;
