import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "../../api/axiosClient";
import validator from "validator";

const Header = ({ isLoggedIn, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (validator.isEmpty(searchTerm)) {
      // Display an error message or perform appropriate action for empty search term
      console.log("Please enter a search term");
      return;
    }
    if (!validator.isLength(searchTerm, { min: 3 })) {
      // Display an error message or perform appropriate action for search term length less than 3
      console.log("Search term should be at least 3 characters long");
      return;
    }
    // If the search term is valid, send the data to the backend
    sendSearchData(searchTerm);
  };

  const sendSearchData = (searchTerm) => {
    const searchData = { searchTerm };
    axios
      .post("/posts", searchData)
      .then((response) => {
        // Xử lý dữ liệu trả về từ backend
        console.log(response.data.searchTerm);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  };

  return (
    <div className="header">
      <header
        className="p-1 pt-2 border-bottom sticky-header lowest-priority"
        id="top-header"
      >
        <div className="container px-0">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                fill="currentColor"
                className="bi bi-book text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <span className="fs-4 fw-bold ml-2" style={{ color: "#574240" }}>
                Sách Việt
              </span>
            </Link>

            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pl-5 pr-0">
              <form className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Nhập từ khóa, tiêu đề, tác giả hoặc ISBN"
                  aria-label="Search"
                  style={{ width: "30rem" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  required // Add the required attribute for HTML5 form validation
                />
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  disabled={!searchTerm}
                >
                  {/* Disable the button when searchTerm is empty */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </div>

            <ul className="nav nav-pills">
              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    to="/my-account/detail"
                    className="nav-link btn-outline-danger link-danger"
                  >
                    Tài khoản của tôi
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    to="/basket/detail"
                    className="nav-link btn-outline-danger link-danger"
                  >
                    Giỏ hàng
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart4 ml-2 text-center"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.621l-1.5-6A.5.5 0 0 1 2.5 4H1a.5.5 0 0 1-.485-.621L1.521 2H0zm3.884 0h8.232l1.437 6H2.447l1.437-6z" />
                      <path d="M6.5 14a1.5 1.5 0 0 0 1.493-1.356L8 10.5h4.5a1.5 1.5 0 0 0 0-3H8l-.354-1.144A1.5 1.5 0 1 0 5.5 7H10a.5.5 0 0 1 0 1H5.5a1.5 1.5 0 0 0 0 3h4.818l.354 1.144A1.5 1.5 0 0 0 6.5 14z" />
                    </svg>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {isLoggedIn ? (
                  <button
                    className="nav-link btn-outline-danger link-danger"
                    onClick={onLogout}
                  >
                    Đăng xuất
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="nav-link btn-outline-danger link-danger"
                  >
                    Đăng nhập
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
