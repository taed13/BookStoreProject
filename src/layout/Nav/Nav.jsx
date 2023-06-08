import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="main-navigation" style={{ marginTop: "5rem" }}>
      <div className="navbar-link border-bottom">
        <div className="container px-0">
          <div className="nav-scroller">
            <nav className="nav d-flex justify-content-between align-items-center">
              <Link to="/tim-kiem-nang-cao" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search mr-2" viewBox="0 0 18 18">
                  <path d="M10.88 9.83a5 5 0 1 0-.35.35l3.57 3.57a.5.5 0 0 0 .71-.71L10.88 9.83zm-5.38 0A3.5 3.5 0 1 1 9.5 6.42L6.41 3.33a.5.5 0 0 0-.71.71L8.09 6.5A3.47 3.47 0 0 1 5.5 9.5z" />
                </svg> Tìm kiếm 
              </Link>
              <Link to="/sach-giao-khoa" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-book mr-2" viewBox="0 0 18 18">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2h11a.5.5 0 0 1 .447.276l3.5 7a.5.5 0 0 1 0 .448l-3.5 7A.5.5 0 0 1 11.5 18H.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5zm13.5.5L10 10.286V3h3.5zM13 15l2.5-5L13 5v10zM4 7h5v2H4V7zm0 4h4v2H4v-2z" />
                </svg> Sách giáo khoa
              </Link>
              <Link to="/sach-hiem" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-diamond mr-2" viewBox="0 0 18 18">
                  <path d="M1.5 1a1 1 0 0 0-.8 1.6l6.4 7.2a1 1 0 0 0 1.6 0l6.4-7.2A1 1 0 0 0 14.5 1h-13zm1 2.032L8 10.57l5-5.638V13H2V3.032zm9-.162L8 10.43 5.5 2.87h5zm-7-.178L8 2l1.5.692V9H4.5V2.654zM3 13v-2h10v2H3z" />
                </svg> Sách hiếm
              </Link>
              <Link to="/tai-khoan" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person mr-2" viewBox="0 0 18 18">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a5 5 0 0 0-4.546 2.914.5.5 0 0 0 .952.306A4 4 0 1 1 8 14a4 4 0 0 1 0-8zm0 1a6 6 0 0 0-5.657 3.823.5.5 0 0 0 .894.448A5 5 0 1 1 8 13a5 5 0 0 1 0-10z" />
                </svg> Tài khoản
              </Link>
              <Link to="/the-loai" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-grid mr-2" viewBox="0 0 18 18">
                  <path d="M0 0h3v3H0V0zm5 0h3v3H5V0zm5 0h3v3h-3V0zM0 5h3v3H0V5zm5 0h3v3H5V5zm5 0h3v3h-3V5zM0 10h3v3H0v-3zm5 0h3v3H5v-3zm5 0h3v3h-3v-3zM0 15h3v1H0v-1zm5 0h3v1H5v-1zm5 0h3v1h-3v-1z" />
                </svg> Thể loại
              </Link>
              <Link to="/danh-muc" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list mr-2" viewBox="0 0 18 18">
                  <path fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 1 3 .5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 1.5 2zm0 5A1.5 1.5 0 0 1 3 5.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 1.5 7zm0 5A1.5 1.5 0 0 1 3 10.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 1.5 12z" />
                </svg> Danh mục
              </Link>
              <Link to="/khuyen-mai" className="p-2 link-secondary text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gift mr-2" viewBox="0 0 16 16">
                  <path d="M0 2.5A2.5 2.5 0 0 1 2.5 0h11A2.5 2.5 0 0 1 16 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5v-11zM2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11zm3.5 6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2 1.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4zm4 0a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4zm2-7a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5zm-4 0a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5zm2 8a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-1 0v1.5z" />
                </svg> Khuyến mãi
              </Link>
              {/* Thêm các Link to cần thiết cho các trang khác */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
