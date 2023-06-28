import React from "react";
import "./Basket.css";
import BookProductPay from "../../components/BookProductPay/BookProductPay";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import { Link, json } from "react-router-dom";
import SaveForLater from "../../components/SaveForLater/SaveForLater";
import ListBook from "../../components/ListBook/ListBook";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosClient";
import { useEffect, useState } from "react";

const Basket = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic khi người dùng nhấn nút "Proceed to Checkout"
    navigate("/process-checkout/payment-infor");
  };
  return (
    <>
      <div className='container p-0'>
        <div className='pageHeader mb-2'>
          <h1>Giỏ Hàng Của Tôi</h1>
        </div>
        <div
          style={{ display: "flex" }}
          className='pageHeader'
        >
          <div style={{ flex: 6 }}>
            <ShippingForm />
          </div>
          <div style={{ flex: 2 }}>
            <div className='couponList text-danger font-weight-bold'>
              <nobr>
                <span
                  className='price'
                  tabindex='0'
                  aria-label='Your order total is US$ 115.48'
                >
                  US$ {totalPrice}
                </span>
              </nobr>
              <br />
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <form
              method='post'
              action='/servlet/ShoppingBasket'
              name='proceedToCheckout'
              className='nopadding'
              onSubmit={handleSubmit}
            >
              <img
                src='https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/proceedcheckout.gif'
                alt='Proceed to Checkout'
                className='checkout-button-img btn btn-primary btn-light'
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>

        <div className='container p-0 custom-border rounded-3 my-3'>
          <div
            style={{
              backgroundColor: "rgb(221, 221, 221)",
            }}
            className='py-2'
          >
            <div
              style={{ display: "flex" }}
              className='pageHeader'
            >
              <div style={{ flex: 6 }} className=''>
                <strong className='pl-2'>
                  Vật phẩm trong giỏ hàng ({books.length}{" "}
                  vật phẩm)
                </strong>
              </div>
              <div style={{ flex: 2 }}>
                <div className='row'>
                  <div className='col'>
                    <strong>Giá</strong>
                  </div>
                  <div className='col'>
                    <strong>Số lượng</strong>
                  </div>
                </div>
              </div>
              <div style={{ flex: 2 }}>
                {/* <div className="row">??</div> */}
              </div>
            </div>
          </div>
          {books.map((book) => (
            <div key={book.id}>
              {/*  chỗ ni Nghĩa làm cái đổ dữ liệu trong giỏ hàng */}
              <BookProductPay
                bookData={{
                  id: book.id,
                  title: book.id,
                  author: book.body,
                  image: book.image,
                  price: book.price,
                }}
              />
              <div className='custom-border-bottom'></div>
              {(totalPrice += book.price)}{" "}
              {/* Cộng dồn giá của từng cuốn sách */}
            </div>
          ))}
          ;
        </div>

        <div className='order-total'>
          <div
            style={{ display: "flex" }}
            className='pageHeader'
          >
            <div style={{ flex: 6 }}>
              <Link to='/'>
                <img
                  src='https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/abebookshome.gif'
                  alt='Home'
                  className='your-img-class'
                />
              </Link>
              <br />
              <small>
                <input
                  type='button'
                  value='Gửi email giỏ hàng của tôi'
                  className='btn-secondary my-1'
                />
              </small>
            </div>
            <span className='text-danger font-weight-bold mr-1'>
              Tổng hóa đơn:
            </span>
            <div style={{ flex: 2 }}>
              <div className='couponList text-danger font-weight-bold'>
                <nobr>
                  <span
                    className='price'
                    tabindex='0'
                    aria-label='Your order total is US$ 115.48'
                  >
                    {total}VND
                  </span>
                </nobr>
                <br />
              </div>
            </div>
            <div style={{ flex: 2 }}>
              <form
                method='post'
                action='/servlet/ShoppingBasket'
                name='proceedToCheckout'
                className='nopadding'
                onSubmit={handleSubmit}
              >
                <img
                  src='https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/proceedcheckout.gif'
                  alt='Proceed to Checkout'
                  className='checkout-button-img btn btn-primary btn-light'
                  onClick={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>

        <div className='save-for-later'>
          <SaveForLater />
        </div>

        <div className='customers-who-bought-items'>
          <ListBook
            title={
              "Khách hàng mua những sản phẩm này cũng đã mua"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Basket;
