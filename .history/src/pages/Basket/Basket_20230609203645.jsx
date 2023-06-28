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
  const [total, setTotal] = useState(0); // Biến tổng totalPrice
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id; //
  // Hàm xóa một sản phẩm khỏi giỏ hàng
  const removeBook = (productId) => {
    setBooks(
      books.filter((product) => product.id !== productId)
    );
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `shoppingCart/${userId}`
        );
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);
  const calculateTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < books.length; i++) {
      totalPrice += books[i].totalPrice;
    }
    setTotal(totalPrice);
  };

  // Gọi hàm calculateTotal khi books thay đổi
  useEffect(() => {
    calculateTotal();
  }, [books, quantity]);
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
                  productId: book.productId,
                  title: book.productName,
                  userName: book.userName,
                  price: book.price,
                  authorName: book.authorName,
                  image: book.image,
                  quantity1: book.quantity,
                  totalPrice: book.totalPrice,
                }}
                onRemove={removeBook}
              />

              <div className='custom-border-bottom'></div>
            </div>
          ))}
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
