import React from "react";
import "./BookProductPay.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { cartAPI } from "../../api/cartAPI";
import { AppContext } from "../../App";

const BookProductPay = ({ bookData, onUpdateQuantity }) => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(
    bookData.subtotal1
  );

  // useEffect(() => {
  //   const newSubtotal = pricePerBook * quantity;
  //   setSubtotal(newSubtotal);
  // }, [quantity, shippingPrice]);
  useEffect(() => {
    if (bookData?.quantity1) {
      setQuantity(bookData.quantity1);
    }
  }, [bookData]);
  const handleRemoveBook = async () => {
    const res = await cartAPI.deleteCart(bookData.id);
    if (res.status === 200) {
      console.log("deleted", res);
      navigate("/basket/detail");
    } else {
      console.log("error", res);
    }
  };
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
    // onUpdateQuantity(
    //   bookData.productId,
    //   +event.target.value
    // );
  };
  const [count, setCount] = useState(1);

  const handleUpdate = async () => {
    if (context?.user?.id) {
      const res = await cartAPI.updateCart({
        productId: bookData.productId,
        userId: context.user.id,
        id: bookData.id,
        quantity: quantity,
=======
import axios from "../../api/axiosClient";
import { useEffect, useState } from "react";

const BookProductPay = ({ bookData }) => {
  const [quantity, setQuantity] = useState(1);
  const [shippingPrice, setShippingPrice] = useState(3.99);
  const [subtotal, setSubtotal] = useState(0);

  const pricePerBook = 8.96;

  useEffect(() => {
    const newSubtotal =
      pricePerBook * quantity + shippingPrice;
    setSubtotal(newSubtotal);
  }, [quantity, shippingPrice]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const [count, setCount] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCount = event.target.quantity.value;

    axios
      .post("/posts", { count: newCount })
      .then((response) => {
        console.log(response.data);
        // Xử lý phản hồi từ API
      })
      .catch((error) => {
        console.error(error);
        // Xử lý lỗi
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
      });
      if (res.status === 200) {
        console.log("update cart successfully", res);
      } else {
        console.log("update cart failed");
      }
    }
  };

<<<<<<< HEAD
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
                  src={bookData?.image}
                  alt='Book cover'
                  height={150}
                  width={100}
                />
              </p>
            </div>
            <div className='bookInfo pl-3'>
              <small>
                <Link to='/book-detail' className='p-0 m-0'>
                  <strong>
                    <p className='bookTitle p-0 m-0'>
                      {bookData.title}
                    </p>
                  </strong>
                </Link>
                <p className='p-0 m-0'>
                  {bookData.authorName}
                </p>
=======
  const { id, title, author, image } = bookData;

  if (bookData) {
    return (
      <>
        <div className='container pl-3 my-2'>
          <strong>Người bán: </strong>
          <a href='#'>{bookData.id}</a>
          <a href='#' className='d-block'>
            {bookData.title}
          </a>
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
                    src='https://pictures.abebooks.com/isbn/9780132350884-us.jpg'
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
                        The Practice of Computing Using
                        Python
                      </p>
                    </strong>
                  </Link>
                  <p className='p-0 m-0'>
                    Ellis, Bret Easton
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className='row'>
              <div className='col'>
                <div className='price'>
                  US$ {pricePerBook}
                </div>
                <span>
                  <small>
                    <a href='#' className='n'>
                      Convert Currency
                    </a>
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
                      (of <span>10</span>)
                      <input
                        type='submit'
                        value='Update'
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
                    value='Save For Later'
                    className='btn-secondary'
                  />
                </form>
                <form action='' name='remove'>
                  <input
                    type='submit'
                    name=''
                    id=''
                    className='btn-secondary'
                    value='Remove'
                  />
                </form>
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
              </small>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div style={{ flex: 2 }}>
          <div className='row'>
            <div className='col'>
              <div className='price'>
                {bookData?.price}VND
              </div>
              <span>
                <small>
                  <a href='#' className='n'></a>
                </small>
              </span>
            </div>
            <div className='col'>
              <div className='quantity'>
                <small>
                  <input
                    type='number'
                    name='quantity'
                    id='quantity'
                    min='1'
                    max='10'
                    value={quantity}
                    className='w-25'
                    onChange={handleQuantityChange}
                  />
                  (của <span>10</span>)
                  <button
                    className='mt-1 btn-secondary'
                    onClick={handleUpdate}
                  >
                    Cập nhật
                  </button>
                </small>
              </div>
            </div>
          </div>
=======
        <div style={{ display: "flex" }} className='my-3'>
          <div
            style={{
              flex: 6,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className='flex-column'>
              <div className='text-right'>
                <label
                  htmlFor='shippingSpeed'
                  className='pr-3'
                >
                  Shipping:
                </label>
              </div>
              <form action='' className='mb-3 pr-2'>
                <select
                  name='shippingSpeed'
                  id='shippingSpeed'
                >
                  <option value='standard'>
                    Standard shipping: 59 to 60 business
                    days
                  </option>
                  <option value='expedited'>
                    Standard shipping: 59 to 60 business
                    days
                  </option>
                  <option value='priority'>
                    Standard shipping: 59 to 60 business
                    days
                  </option>
                </select>
              </form>
              <div className='text-right'>
                <label
                  htmlFor='shippingSpeed'
                  className='pr-2'
                >
                  Subtotal:
                </label>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className='d-flex flex-column'>
              <div className='mb-auto shipping'>
                US$ {shippingPrice}
              </div>
              <div className='d-flex justify-content-between align-items-end'>
                <div className='subtotal pt-5'>
                  US$ {subtotal.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}></div>
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
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
              <button
                className='btn-secondary'
                onClick={handleRemoveBook}
              >
                Xóa sách
              </button>
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
              <div className='subtotal'>{subtotal}VND</div>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}></div>
      </div>
    </>
  );
};
export default BookProductPay;
