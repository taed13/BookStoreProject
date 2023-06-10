import React, { useEffect, useState } from "react";
import "./DetailBook.css";
import axios from "../../api/axiosClient";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
const addToCart = () => {
  // Lấy ID sách từ local storage
  const product_id = localStorage.getItem("IDbook");
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.id;
  // Gửi yêu cầu POST đến API với ID sách
  axios
    .post("/shoppingCart", {
      product_id,
      user_id,
    })
    .then((response) => {
      // Xử lý kết quả từ API nếu cần
      console.log("Đã thêm vào giỏ hàng:", response.data);
    })
    .catch((error) => {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    });
};
const DetailBook = () => {
  const [BookDetail, setBookDetail] = useState(null);
  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axios.get(
          "/product/" +
            JSON.parse(localStorage.getItem("IDbook"))
        );

        setBookDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookDetail();
  }, []);

  if (BookDetail) {
    console.log("Book", BookDetail);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 align-self-start small px-0'>
            <div className='breadcrumb-section p-0'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb p-0 bg-white'>
                  <li className='breadcrumb-item'>
                    <a
                      className='link-body-emphasis'
                      href='../../index.html'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-house-door-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z' />
                      </svg>
                      <span className='visually-hidden'>
                        Home
                      </span>
                    </a>
                  </li>
                  <li
                    className='breadcrumb-item active'
                    aria-current='page'
                  >
                    My account
                  </li>
                </ol>
              </nav>
            </div>
            <div className='border-bottom pb-2'>
              <h5 className='fw-bold mb-0'>
                {BookDetail.name}
              </h5>
              <a href='' className='fw-bolder link-info'>
                <span>{BookDetail.authorName}</span>
              </a>
              <div className='d-flex align-items-center mt-2'>
                <div className='star-ratings'>
                  <span className='star text-warning'>
                    &#9733;
                  </span>
                  <span className='star text-warning'>
                    &#9733;
                  </span>
                  <span className='star text-warning'>
                    &#9733;
                  </span>
                  <span className='star text-warning'>
                    &#9733;
                  </span>
                  <span className='star text-warning'>
                    &#9733;
                  </span>
                </div>
                <span className='me-2 ml-2 mr-0'>
                  4.01 đánh giá trung bình
                </span>
                <span className='me-2 mr-0'>•</span>
                <span className='me-2'>
                  4,246 đánh giá bởi Goodreads
                </span>
              </div>
            </div>
            <div className='row pt-3 mx-0'>
              <div className='col-md-3 pr-4 pl-0'>
                <div>
                  <img
                    src={BookDetail.avatar}
                    alt=''
                    className='img-fluid mt-1'
                    style={{ width: "90%", height: "90%;" }}
                  />
                </div>
              </div>
              <div className='col-md-9 px-0'>
                <div className='book-conver-type'>
                  <h5 className='font-weight-normal my-0'>
                    <span>{BookDetail.binding}</span>
                  </h5>
                </div>
                <div className='publisher my-0'>
                  <p className='font-weight-normal mt-0'>
                    <span>{BookDetail.publisherName}</span>
                  </p>
                </div>
                <div className='isbn-edition my-0 d-flex text-center'>
                  <p>
                    <i className='fas fa-greater-than'></i>
                  </p>
                  <a href='' className='link-dark'>
                    <p className='font-weight-normal'>
                      Xem tất cả bản sao của ấn bản ISBN
                      này:
                    </p>
                  </a>
                </div>
                <div className='new-used d-flex'>
                  <div className='new d-flex flex-column rounded-2 bg-light shadow mr-2 col-3 p-2'>
                    <a href='' className='link-dark'>
                      <div className='link-info'>
                        45 Cuốn mới
                      </div>
                      từ
                      <span className='link-danger'>
                        {" "}
                        US$ 14.44
                      </span>
                    </a>
                  </div>
                  <div className='new d-flex flex-column rounded-2 bg-light shadow mr-2 col-3 p-2'>
                    <a href='' className='link-dark'>
                      <div className='link-info'>
                        45 Cuốn cũ
                      </div>
                      từ
                      <span className='link-danger'>
                        {" "}
                        US$ 5.26
                      </span>
                    </a>
                  </div>
                </div>
                <div className='d-flex mt-4 border-bottom'>
                  <div className='d-block col-6 px-0'>
                    <div className='isbn-edition my-0 d-flex text-center'>
                      <p>
                        <i className='fas fa-greater-than'></i>
                      </p>
                      <a href='' className='link-dark'>
                        <p className='font-weight-normal'>
                          Xem tất cả định dạng và ấn bản của
                          tiêu đề:
                        </p>
                      </a>
                    </div>
                    <div className='new-used d-flex mx-0 px-0 justify-content-evenly'>
                      <div className='new d-flex flex-column rounded-5 bg-light shadow p-2 col-5'>
                        <a
                          href=''
                          className='link-dark text-decoration-none text-center'
                        >
                          <div>Bản mềm (527)</div>
                          từ{" "}
                          <span className='link-danger'>
                            {" "}
                            US$ 14.44{" "}
                          </span>
                        </a>
                      </div>
                      <div className='new d-flex flex-column rounded-5 bg-light shadow p-2 col-5'>
                        <a
                          href=''
                          className='link-dark text-decoration-none text-center'
                        >
                          <div>Bản cứng (527)</div>
                          từ{" "}
                          <span className='link-danger'>
                            {" "}
                            US$ 14.44{" "}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='d-block col-6 px-0'>
                    <div className='isbn-edition my-0 d-flex text-center'>
                      <p>
                        <i className='fas fa-greater-than'></i>
                      </p>
                      <a href='' className='link-dark'>
                        <p className='font-weight-normal'>
                          Xem tất cả các phiên bản của tiêu
                          đề:
                        </p>
                      </a>
                    </div>
                    <div className='new-used d-flex mx-0 px-0 justify-content-evenly'>
                      <div className='new d-flex flex-column rounded-5 bg-light shadow p-2 mb-3 col-5'>
                        <a
                          href=''
                          className='link-dark text-decoration-none text-center'
                        >
                          <div>
                            <small>
                              Ấn bản đầu tiên (527)
                            </small>
                          </div>
                          <div>
                            <small>Xem ưu đãi</small>
                          </div>
                        </a>
                      </div>
                      <div className=' new d-flex flex-column rounded-5 bg-light shadow p-2 mb-3 col-5'>
                        <a
                          href=''
                          className='link-dark text-decoration-none text-center'
                        >
                          <div>
                            <small>
                              Bản sao đã ký (527)
                            </small>
                          </div>
                          <div>
                            <small>Xem ưu đãi</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-top mt-5'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mt-4'>
                      <h4 className='font-weight-bold'>
                        Giới thiệu về cuốn sách
                      </h4>
                    </div>
                  </div>
                  <div className='col-md-8'>
                    <div className='mt-4'>
                      <h5 className='font-weight-bold'>
                        {BookDetail.name}
                      </h5>
                      <p>
                        Tác giả: {BookDetail.authorName}
                      </p>
                      <p>
                        Mô tả về sách...{" "}
                        {BookDetail.description}
                      </p>
                      <p>
                        Thể loại:{" "}
                        {BookDetail.productTypeName}
                      </p>
                      <p>
                        Ngày xuất bản:{" "}
                        {BookDetail.publishedDate}
                      </p>
                      <p>
                        Nhà xuất bản:{" "}
                        {BookDetail.publisherName}
                      </p>
                      <p>Đánh giá: 4.5</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-top mt-5'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mt-4'>
                      <h4 className='font-weight-bold'>
                        Phương thức thanh toán
                      </h4>
                      <p>
                        <small>
                          được chấp nhận bởi bên bán
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className='col-md-8'>
                    <div className='mt-4'>
                      <img
                        src='https://assets.prod.abebookscdn.com/cdn/shared/images/Shared/icons/cc-visa.png'
                        alt=''
                        className='mr-2'
                      />
                      <img
                        src='https://assets.prod.abebookscdn.com/cdn/shared/images/Shared/icons/cc-masterc.png'
                        alt=''
                        className='mr-2'
                      />
                      <img
                        src='https://assets.prod.abebookscdn.com/cdn/shared/images/Shared/icons/cc-visa.png'
                        alt=''
                        className='mr-2'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 px-0'>
            <div className='buy-new border mt-2 rounded-top-2 mx-3'>
              <div className='learn-more d-flex flex-column small mx-2 mt-2'>
                <b>Mua mới</b>
                <a href=''>Tìm hiểu về bản sao này</a>
              </div>
              <div className='pricing d-flex flex-column mt-2 mx-2'>
                <span className='text-danger fw-bolder'>
                  <h4 className='mb-0'>
                    {BookDetail.price}VND
                  </h4>
                </span>
              </div>
              <div className='shipping d-flex flex-column small mx-2'>
                <div className='d-flex align-items-center'>
                  <b>Vận chuyển</b>
                  <span className='ml-2'>
                    <i
                      className='fas fa-shipping-fast fa-sm pr-1'
                      style={{ color: "#c0457c" }}
                    ></i>
                    MIỄN PHÍ
                  </span>
                </div>
                <small>trong U.S.A</small>
                <a href=''>Điểm đến, giá và tốc độ</a>
              </div>
              <div className='add-to-basket text-center mb-4 mx-2 mt-2'>
                <button
                  onClick={addToCart}
                  className='text-light bg-danger rounded-2 d-block mx-auto text-decoration-none py-2 w-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-cart4 mr-1 pb-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
            <div className='buy-used border rounded-bottom-2 mx-3'>
              <div className='learn-more d-flex flex-column small mx-2 mt-2'>
                <b>Mua cũ</b>
                <a href=''>Tìm hiểu về bản sao này</a>
              </div>
              <div className='pricing d-flex flex-column mt-2 mx-2'>
                <span className='text-danger fw-bolder'>
                  <h4 className='mb-0'>US$ 11.73</h4>
                </span>
              </div>
              <div className='shipping d-flex flex-column small mx-2'>
                <div className='d-flex align-items-center'>
                  <b>Vận chuyển</b>
                  <span className='ml-2'>
                    <i
                      className='fas fa-shipping-fast fa-sm pr-1'
                      style={{ color: "#c0457c" }}
                    ></i>
                    MIỄN PHÍ
                  </span>
                </div>
                <small>Within U.S.A</small>
                <a href=''>Điểm đến, giá và tốc độ</a>
              </div>
              <div className='add-to-basket text-center mb-4 mx-2 mt-2'>
                <button className='text-light bg-danger rounded-2 d-block mx-auto text-decoration-none py-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-cart4 mr-1 pb-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
            <div className='text-center mt-3 mx-3'>
              <a href='' className='text-decoration-none'>
                Chính sách đổi trả trong 30 ngày
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailBook;
