import React from "react";
import "./BookProductPay.css";
import { Link } from "react-router-dom";
import axios from "../../api/axiosClient";
import { useEffect, useState } from "react";

const BookProductPay = ({ bookData, onRemove }) => {
  const product = JSON.parse(
    localStorage.getItem("IDbook")
  );

  // Lấy thông tin người dùng từ localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.id; // Lấy giá trị id từ đối tượng người dùng

  // Tạo đối tượng JSON để truyền về backend

  const {
    title,
    username,
    price,
    authorName,
    image,
    id,
    quantity1,
  } = bookData;
  const [quantity, setQuantity] = useState({1
  });

  const [shippingPrice, setShippingPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const pricePerBook = bookData.price;

  useEffect(() => {
    const newSubtotal =
      pricePerBook * quantity + shippingPrice;
    setSubtotal(newSubtotal);
  }, [quantity, shippingPrice]);

  const data = {
    productId: product,
    userId: user_id,
  };
  const handleRemoveBook = (event) => {
    event.preventDefault();
    onRemove(bookData.id);
    // Gọi API xóa sách
    axios
      .delete(`/shoppingCart/${bookData.id}`)
      .then((response) => {
        // Xử lý kết quả thành công
        console.log("Sách đã được xóa khỏi giỏ hàng.");
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(
          "Đã xảy ra lỗi khi xóa sách khỏi giỏ hàng:",
          error
        );
      });
  };
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));

  };
  const [count, setCount] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCount = event.target.quantity.value;
    const data = {
      productId: product,
      userId: user_id,
      quantity: newCount,
    };
    axios
      .put("/shoppingCart", data)
      .then((response) => {
        console.log(response.data);
        // Xử lý phản hồi từ API
      })
      .catch((error) => {
        console.error(error);
        // Xử lý lỗi
      });
  };

  if (bookData) {
    return (
      <>
        <div className='container pl-3 my-2'>
          <strong>Người mua: </strong>
          <a href='#'>{bookData.userName}</a>
          <a href='#' className='d-block'></a>
        </div>
        <div
          style={{ display: "flex" }}
          className='pageHeader border-bottom pb-2'
        >
          <div style={{ flex: 6 }} className=''>
            <div className='d-flex'>
              <div className='image pl-3'>
                <p>
                  <img
                    src={image}
                    alt='Book cover'
                    height={150}
                    width={100}
                  />
                </p>
              </div>
              <div className='bookInfo pl-3'>
                <small>
                  <Link
                    to='/book-detail'
                    className='p-0 m-0'
                  >
                    <strong>
                      <p className='bookTitle p-0 m-0'>
                        {bookData.title}
                      </p>
                    </strong>
                  </Link>
                  <p className='p-0 m-0'>
                    {bookData.authorName}
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className='row'>
              <div className='col'>
                <div className='price'>
                  {pricePerBook}VND
                </div>
                <span>
                  <small>
                    <a href='#' className='n'></a>
                  </small>
                </span>
              </div>
              <div className='col'>
                <div className='quantity'>
                  <form
                    name='updateQuantity'
                    onSubmit={handleSubmit}
                  >
                    <small>
                      <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        min='1'
                        max='10'
                        defaultValue={count}
                        className='w-25'
                        onChange={handleQuantityChange}
                      />
                      (của <span>10</span>)
                      <input
                        type='submit'
                        value='Cập nhật'
                        className='mt-1 btn-secondary'
                      />
                    </small>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className='flex-column pr-3'>
              <small className='w-25'>
                <form
                  className='mb-1'
                  action=''
                  name='saveForLater'
                >
                  <input
                    type='submit'
                    value='Lưu lại sau này'
                    className='btn-secondary'
                  />
                </form>
                <form
                  action=''
                  name='remove'
                  onSubmit={handleRemoveBook}
                >
                  <input
                    type='submit'
                    className='btn-secondary'
                    value='Xóa sách'
                  />
                </form>
              </small>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }} className='my-3'>
          <div
            style={{
              flex: 6,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className='flex-column'>
              <div className='text-right'></div>
              <form action='' className=' pr-2'></form>
              <div className='text-right'>
                <label
                  htmlFor='shippingSpeed'
                  className='pr-2'
                >
                  Tổng tiền cuốn này:
                </label>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className='d-flex flex-column'>
              <div className='d-flex justify-content-between align-items-end'>
                <div className='subtotal'>
                  {subtotal.toFixed(2)}VND
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}></div>
        </div>
      </>
    );
  }
};
export default BookProductPay;
