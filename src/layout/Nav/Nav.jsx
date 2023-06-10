import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  SearchOutlined,
  BookOutlined,
  GiftOutlined,
  UserOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="main-navigation" style={{ marginTop: "5rem" }}>
      <div className="navbar-link border-bottom">
        <div className="container px-0">
          <div className="nav-scroller">
            <Menu mode="horizontal" theme="light" className="nav-menu">
              <Menu.Item
                key="search"
                icon={<SearchOutlined />}
                className="nav-item"
              >
                <Link to="/advanced-search" className="text-decoration-none">
                  Tìm kiếm nâng cao
                </Link>
              </Menu.Item>
              <Menu.Item
                key="textbook"
                icon={<BookOutlined />}
                className="nav-item"
              >
                <Link to="/sach-giao-khoa" className="text-decoration-none">
                  Sách giáo khoa
                </Link>
              </Menu.Item>
              <Menu.Item
                key="rare"
                icon={<GiftOutlined />}
                className="nav-item"
              >
                <Link to="/sach-hiem" className="text-decoration-none">
                  Sách hiếm
                </Link>
              </Menu.Item>
              <Menu.Item
                key="account"
                icon={<UserOutlined />}
                className="nav-item"
              >
                <Link to="/tai-khoan" className="text-decoration-none">
                  Tài khoản
                </Link>
              </Menu.Item>
              <Menu.Item
                key="category"
                icon={<AppstoreOutlined />}
                className="nav-item"
              >
                <Link to="/the-loai" className="text-decoration-none">
                  Thể loại
                </Link>
              </Menu.Item>
              <Menu.Item
                key="list"
                icon={<BarsOutlined />}
                className="nav-item"
              >
                <Link to="/danh-muc" className="text-decoration-none">
                  Danh mục
                </Link>
              </Menu.Item>
              <Menu.Item
                key="promotion"
                icon={<GiftOutlined />}
                className="nav-item mr-5"
              >
                <Link to="/khuyen-mai" className="text-decoration-none">
                  Khuyến mãi
                </Link>
              </Menu.Item>
              {/* Add additional Menu.Item for other pages */}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
