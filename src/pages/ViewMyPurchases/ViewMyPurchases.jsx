import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import "./ViewMyPurchases.css";

const ViewMyPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [selectedStatus, setSelectedStatus] = useState("Tất cả");
  const [selectedLocation, setSelectedLocation] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Generate fake data for purchases
    const generateFakeData = () => {
      const data = [];
      for (let i = 1; i <= 50; i++) {
        const purchase = {
          id: i,
          orderCode: generateOrderCode(),
          deliveryLocation: generateDeliveryLocation(),
          orderDate: generateOrderDate(),
          status: generateStatus(),
          totalPrice: generateTotalPrice(),
        };
        data.push(purchase);
      }
      setPurchases(data);
    };

    generateFakeData();
  }, []);

  const handleDisplayCountChange = (event) => {
    setDisplayCount(parseInt(event.target.value));
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generateOrderCode = () => {
    // Generate random order code
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomCode = [...Array(6)]
      .map((_) =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      )
      .join("");
    return `ORDER-${randomCode}`;
  };

  const generateDeliveryLocation = () => {
    // Generate random delivery location
    const locations = ["Berlin", "London", "Madrid", "New York", "Paris"];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  const generateOrderDate = () => {
    // Generate random order date
    const startDate = new Date(2022, 0, 1);
    const endDate = new Date();
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
    return randomDate.toISOString().split("T")[0];
  };

  const generateStatus = () => {
    // Generate random status
    const statuses = [
      "Đã giao hàng",
      "Đang vận chuyển",
      "Đang giải quyết",
      "Huỷ đơn hàng",
    ];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const generateTotalPrice = () => {
    // Generate random total price
    return (Math.random() * 1000).toFixed(2);
  };

  const getStatusClassName = (status) => {
    switch (status) {
      case "Đã giao hàng":
        return "text-success";
      case "Đang vận chuyển":
        return "text-info";
      case "Đang giải quyết":
        return "text-warning";
      case "Huỷ đơn hàng":
        return "text-danger";
      default:
        return "";
    }
  };

  // Calculate the indexes of the displayed purchases based on the current page and display count
  const startIndex = (currentPage - 1) * displayCount;
  const endIndex = startIndex + displayCount;

  return (
    <div className="container p-0">
      <div className="table-responsive">
        <div className="table-wrapper px-5">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2 className="ml-3">
                  Danh Sách <b>Hoá Đơn</b>
                </h2>
              </div>
              <div className="col-sm-8"></div>
            </div>
          </div>
          <div className="table-filter">
            <div className="row">
              <div className="col-sm-3">
                <div className="show-entries">
                  <span>Hiển thị</span>
                  <select
                    className="form-control"
                    value={displayCount}
                    onChange={handleDisplayCountChange}
                  >
                    <option>5</option>
                    <option>10</option>
                  </select>
                  <span>mục</span>
                </div>
              </div>
              <div className="col-sm-9">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
                <div className="filter-group">
                  <label>Tìm kiếm</label>
                  <input
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="filter-group">
                  <label>Địa chỉ</label>
                  <select
                    className="form-control"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    <option>Tất cả</option>
                    <option>Berlin</option>
                    <option>London</option>
                    <option>Madrid</option>
                    <option>New York</option>
                    <option>Paris</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Trạng thái</label>
                  <select
                    className="form-control"
                    value={selectedStatus}
                    onChange={handleStatusChange}
                  >
                    <option>Tất cả</option>
                    <option>Đã giao hàng</option>
                    <option>Vận chuyển</option>
                    <option>Đang giải quyết</option>
                    <option>Huỷ đơn hàng</option>
                  </select>
                </div>
                <span className="filter-icon">
                  <i className="fa fa-filter"></i>
                </span>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã đơn hàng</th>
                <th>Địa điểm giao đến</th>
                <th>Ngày đặt hàng</th>
                <th>Trạng thái</th>
                <th>Tổng số tiền</th>
                <th>Xem chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {purchases
                .filter(
                  (purchase) =>
                    selectedLocation === "Tất cả" ||
                    purchase.deliveryLocation.toLowerCase() ===
                      selectedLocation.toLowerCase()
                )
                .filter(
                  (purchase) =>
                    selectedStatus === "Tất cả" ||
                    purchase.status.toLowerCase() ===
                      selectedStatus.toLowerCase()
                )
                .filter(
                  (purchase) =>
                    searchTerm === "" ||
                    purchase.orderCode.toLowerCase().includes(searchTerm) ||
                    purchase.deliveryLocation
                      .toLowerCase()
                      .includes(searchTerm) ||
                    purchase.orderDate.toLowerCase().includes(searchTerm) ||
                    purchase.status.toLowerCase().includes(searchTerm) ||
                    purchase.totalPrice.toLowerCase().includes(searchTerm)
                )
                .slice(startIndex, endIndex)
                .map((purchase) => (
                  <tr key={purchase.id}>
                    <td>{purchase.id}</td>
                    <td>{purchase.orderCode}</td>
                    <td>{purchase.deliveryLocation}</td>
                    <td>{purchase.orderDate}</td>
                    <td>
                      <span
                        className={`status ${getStatusClassName(
                          purchase.status
                        )}`}
                      >
                        •
                      </span>{" "}
                      {purchase.status}
                    </td>
                    <td>{purchase.totalPrice}</td>
                    <td>
                      <Link
                        to={`/my-account/detail/my-purchases/detail-my-purchase`}
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            defaultCurrent={currentPage}
            total={purchases.length}
            pageSize={displayCount}
            onChange={setCurrentPage}
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewMyPurchases;
