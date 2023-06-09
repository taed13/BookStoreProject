import React from "react";
import { Link } from "react-router-dom";
import "./DetailMyPurchase.css";

const DetailMyPurchase = () => {
  const orderQuantity = 2; // Số lượng đặt hàng
  const orderStatus = "confirmed"; // Trạng thái đơn hàng ("confirmed", "processing", "packaging", "shipping", "delivered", "completed")

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <i className="fa fa-check"></i>;
      case "processing":
        return <i className="fa fa-cog"></i>;
      case "packaging":
        return <i className="fa fa-gift"></i>;
      case "shipping":
        return <i className="fa fa-truck"></i>;
      case "delivered":
        return <i className="fa fa-check-circle"></i>;
      case "completed":
        return <i className="fa fa-check-square"></i>;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Xác nhận đặt hàng";
      case "processing":
        return "Xử lý đơn hàng";
      case "packaging":
        return "Đóng gói và vận chuyển";
      case "shipping":
        return "Vận chuyển và giao hàng";
      case "delivered":
        return "Xác nhận giao hàng";
      case "completed":
        return "Hoàn tất đơn hàng";
      default:
        return "";
    }
  };

  return (
    <div className="container p-0 mt-5">
      <article className="card">
        <header className="card-header"> Hoá Đơn Chi Tiết </header>
        <div className="card-body">
          <h6>ID Hoá đơn: OD45345345435</h6>
          <article className="card">
            <div className="card-body row">
              <div className="col">
                <strong>Ước tính thời gian giao hàng:</strong> <br />
                29 nov 2019
              </div>
              <div className="col">
                <strong>Đơn vị giao hàng:</strong> <br />
                BLUEDART, | <i className="fa fa-phone"></i> +1598675986
              </div>
              <div className="col">
                <strong>Trạng thái:</strong> <br />
                Được chọn bởi chuyển phát nhanh
              </div>
              <div className="col">
                <strong>Liên hệ:</strong> <br />
                045903594059
              </div>
            </div>
          </article>
          <div className="track">
            <div
              className={`step ${orderStatus === "confirmed" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("confirmed")}</span>
              <span className="text">Xác nhận đặt hàng</span>
            </div>
            <div
              className={`step ${orderStatus === "processing" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("processing")}</span>
              <span className="text">Xử lý đơn hàng</span>
            </div>
            <div
              className={`step ${orderStatus === "packaging" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("packaging")}</span>
              <span className="text">Đóng gói và vận chuyển</span>
            </div>
            <div
              className={`step ${orderStatus === "shipping" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("shipping")}</span>
              <span className="text">Vận chuyển và giao hàng</span>
            </div>
            <div
              className={`step ${orderStatus === "delivered" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("delivered")}</span>
              <span className="text">Xác nhận giao hàng</span>
            </div>
            <div
              className={`step ${orderStatus === "completed" ? "active" : ""}`}
            >
              <span className="icon">{getStatusIcon("completed")}</span>
              <span className="text">Hoàn tất đơn hàng</span>
            </div>
          </div>
          <hr />
          <ul className="row">
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img
                    src="https://pictures.abebooks.com/isbn/9780385547345-us.jpg"
                    className="img-sm border h-100 h-100"
                    alt="Dell Laptop"
                  />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">
                    Dell Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span className="text-muted">1.000.000VND </span>
                  <p className="text-muted">
                    Số lượng: {orderQuantity === 1 ? "x1" : "x2"}
                  </p>{" "}
                  {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img
                    src="https://pictures.abebooks.com/isbn/9780385547345-us.jpg"
                    className="img-sm border h-100"
                    alt="HP Laptop"
                  />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">
                    HP Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span className="text-muted">1.000.000VND </span>
                  <p className="text-muted">
                    Số lượng: {orderQuantity === 1 ? "x1" : "x2"}
                  </p>{" "}
                  {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
            <li className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside">
                  <img
                    src="https://pictures.abebooks.com/isbn/9780385547345-us.jpg"
                    className="img-sm border h-100"
                    alt="ACER Laptop"
                  />
                </div>
                <figcaption className="info align-self-center">
                  <p className="title">
                    ACER Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span className="text-muted">1.000.000VND </span>
                  <p className="text-muted">
                    Số lượng: {orderQuantity === 1 ? "x1" : "x2"}
                  </p>{" "}
                  {/* Hiển thị số lượng */}
                </figcaption>
              </figure>
            </li>
          </ul>
          <hr />
          <Link
            to="/my-account/detail/my-purchases"
            className="btn btn-warning"
            data-abc="true"
          >
            <i className="fa fa-chevron-left"></i> Trở về danh sách hoá đơn
          </Link>
        </div>
      </article>
    </div>
  );
};

export default DetailMyPurchase;
