import React, { useState } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Giá trị ban đầu tùy thuộc vào trạng thái đăng nhập

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    // Thực hiện xử lý đăng xuất ở đây

    // Sau khi đăng xuất thành công, set state isLoggedIn thành false
    setIsLoggedIn(false);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Nav />
      <div className="text-left">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
