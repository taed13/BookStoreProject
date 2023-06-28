import React from "react";
import "./BookProductPay.css";
import { Link } from "react-router-dom";
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
      });
      if (res.status === 200) {
        console.log("update cart successfully", res);
      } else {
        console.log("update cart failed");
      }
    }
  };

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
              </small>
            </div>
          </div>
        </div>
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
