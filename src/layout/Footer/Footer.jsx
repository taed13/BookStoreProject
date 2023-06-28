import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer mt-5">
      <footer className="alert-danger text-black">
        <div className="container p-4">
          <section className="d-flex flex-column mb-3 align-items-center">
            <BackTop visibilityHeight={300} onClick={handleScrollToTop}>
              <div
                className={`bi bi-arrow-up p-0 text-danger ${
                  scrollY > 300 ? "visible" : "invisible"
                }`}
              >
                <ArrowUpOutlined />
              </div>
            </BackTop>
            <a href="#top-header" className="texdan p-0 link-danger">
              Trở lại đầu trang
            </a>
          </section>

          <section className="mb-4">
            <p>
              Đây là một cửa hàng sách đa dạng với hàng ngàn tựa sách từ các thể
              loại khác nhau. Chúng tôi cam kết cung cấp những cuốn sách chất
              lượng, đáng đọc và mang lại sự hài lòng cho bạn.
            </p>
          </section>
          <section className="mb-4">
            <p>
              Bằng cách sử dụng trang Web, bạn xác nhận rằng bạn đã đọc, hiểu và
              đồng ý bị ràng buộc bởi các Điều khoản và Điều kiện.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Bản quyền © 2023:
          <Link className="text-white ml-2" to="#">
            BookStore
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
