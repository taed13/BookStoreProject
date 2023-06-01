import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="main-navigation">
      <div className="navbar-link border-bottom">
        <div className="container px-0">
          <div className="nav-scroller">
            <nav className="nav d-flex justify-content-between">
              <Link to="/tim-kiem-nang-cao" className="p-2 link-secondary">Tìm kiếm nâng cao</Link>
              <Link to="/sach-giao-khoa" className="p-2 link-secondary">Sách giáo khoa</Link>
              <Link to="/sach-hiem" className="p-2 link-secondary">Sách hiếm</Link>
              <Link to="/gio-hang" className="p-2 link-secondary">Giỏ hàng</Link>
              <Link to="/tai-khoan" className="p-2 link-secondary">Tài khoản</Link>
              <Link to="/the-loai" className="p-2 link-secondary">Thể loại</Link>
              <Link to="/danh-muc" className="p-2 link-secondary">Danh mục</Link>
              <Link to="/khuyen-mai" className="p-2 link-secondary">Khuyến mãi</Link>
              {/* Thêm các Link to cần thiết cho các trang khác */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
