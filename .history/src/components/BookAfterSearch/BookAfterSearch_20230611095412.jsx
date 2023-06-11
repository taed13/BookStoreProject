import React, { useContext } from "react";
import { Button, message } from "antd";
import { AppContext } from "../../App";

const BookAfterSearch = () => {
  const context = useContext(AppContext);
  const handleAddToCart = () => {
    // Xử lý logic khi thêm vào giỏ hàng
    message.success("Sản phẩm đã được thêm vào giỏ hàng");
  };

  return (
    <>
      {context?.searchDataResult?.length > 0 &&
        context.searchDataResult.map((item, index) => {
          return (
            <div className='container p-0 my-3'>
              <div className='d-flex flex-row flex-wrap border rounded-4 p-3'>
                <div
                  className='p-4'
                  style={{
                    flexBasis: "20%",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={item?.avatar}
                    alt='Product'
                    className='img-fluid w-100 rounded-3'
                  />
                </div>
                <div
                  className='p-4 px-2'
                  style={{ flexBasis: "55%" }}
                >
                  <p className='font-weight-bold mb-0'>
                    Tên sách: {item.name}
                  </p>
                  <p className='text-muted mb-0'>
                    Tác giả: {item?.authorName}
                  </p>
                  <p className='text-muted mb-0'>
                    Nhà xuất bản
                  </p>
                  <p className='text-muted mb-0'>
                    Năm xuất bản
                  </p>
                  <p className='text-muted mb-0'>
                    Số trang
                  </p>
                  <p className='text-muted mb-0'>
                    Mô tả:
                    {item.description}
                  </p>
                  <p className='text-muted mb-0'>
                    Thể loại
                  </p>
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
                <div
                  className='p-4 px-4'
                  style={{ flexBasis: "25%" }}
                >
                  <p className='text-muted mb-1'>
                    Bìa cứng
                  </p>
                  <p className='text-muted mb-1'>
                    Tình trạng: Mới
                  </p>
                  <p className='text-muted mb-1'>
                    Giá bìa: 200.000đ
                  </p>
                  <div className='shipping d-flex flex-column'>
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
                  <p className='text-muted mb-4'>
                    Số lượng: 1
                  </p>
                  <div className='add-to-basket text-center mb-4 mt-2'>
                    <Button
                      type='primary'
                      className='text-decoration-none py-2 btn-danger h-100 w-100 bg-danger'
                      onClick={handleAddToCart}
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
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BookAfterSearch;
