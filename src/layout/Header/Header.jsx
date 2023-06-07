import React, { useContext, useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "../../api/axiosClient";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    // Gửi dữ liệu tìm kiếm lên backend
    sendSearchData(searchTerm);
  };

  const sendSearchData = (searchTerm) => {
    const searchData = { searchTerm };
    axios.post('/posts', searchData)
      .then(response => {
        // Xử lý dữ liệu trả về từ backend
        console.log(response.data.searchTerm);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  };

  return (
    <div className="header">
      <header className="p-1 pt-2 border-bottom sticky-header" id="top-header">
        <div className="container px-0">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-book text-danger" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <span className="fs-4 fw-bold ml-2" style={{ color:'#574240'}}>Sách Việt</span>
            </Link>

            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pl-5 pr-0">
              <form className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Nhập từ khóa, tiêu đề, tác giả hoặc ISBN"
                  aria-label="Search"
                  style={{ width: '30rem' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-danger" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mx-auto" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </div>

            <ul className="nav nav-pills">
              <li className="nav-item">
                {context?.user ? (
                  <Link to='/login' className="nav-link btn-outline-danger link-danger">
                    Đăng xuất
                  </Link>
                ) : (
                  <Link to='/login' className="nav-link btn-outline-danger link-danger">
                    Đăng nhập
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link to='/my-account/detail' className="nav-link btn-outline-danger link-danger">
                  Tài khoản của tôi
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/basket/detail" className="nav-link btn-outline-danger link-danger">
                  Giỏ hàng
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 ml-2 text-center" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.621l1.5-6A.5.5 0 0 1 5.11 4H1.11l-.467-1.858A.5.5 0 0 1 .5 2.5zm1.968 0a1.5 1.5 0 1 1 2.964 0h7.068a1.5 1.5 0 1 1 2.964 0H1.968zm11.04 0h-1.954l.233.933h1.682l-.961 3.857-.014.07H4.501l-.016-.08L3.53 4.5h10.546L13.008 2.5zM4.388 14a1.5 1.5 0 1 1 2.725 0h2.775a1.5 1.5 0 1 1 2.725 0h.736l.397 1.586A.5.5 0 0 1 13 17H3a.5.5 0 0 1-.497-.586L3.896 14h.492zm3.712 0H8.9V13h-.802v1zm3.616 0h.491l.427-1.71A.5.5 0 0 1 13 12.5h-2a.5.5 0 0 1-.514.41l.428 1.71h.492zm-5.692 0H6.4V13H5.598v1z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
