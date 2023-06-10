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

const { SubMenu } = Menu;

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
                style={{ width: "33.33%" }}
              >
                <Link to="/advanced-search" className="text-decoration-none">
                  Tìm kiếm nâng cao
                </Link>
              </Menu.Item>
              <SubMenu
                key="category"
                icon={<AppstoreOutlined />}
                title="Thể loại"
                className="nav-item"
                style={{ width: "33.33%" }}
              >
                <Menu.Item key="category-1">
                  <Link
                    to="/the-loai/categoy-1"
                    className="text-decoration-none nav-item"
                  >
                    Thể loại 1
                  </Link>
                </Menu.Item>
                <Menu.Item key="category-2">
                  <Link
                    to="/the-loai/categoy-2"
                    className="text-decoration-none nav-item"
                  >
                    Thể loại 2
                  </Link>
                </Menu.Item>
                {/* Add more Menu.Item for other categories */}
              </SubMenu>

              <Menu.Item
                key="list"
                icon={<BarsOutlined />}
                className="nav-item"
                style={{ width: "33.33%" }}
              >
                <Link to="/danh-muc" className="text-decoration-none">
                  Danh mục
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
