import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import "./Basket.css";
import BookProductPay from "../../components/BookProductPay/BookProductPay";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import { Link } from "react-router-dom";
import SaveForLater from "../../components/SaveForLater/SaveForLater";
import ListBook from "../../components/ListBook/ListBook";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosClient";
import { AppContext } from "../../App";
import { cartAPI } from "../../api/cartAPI";

const Basket = () => {
  console.log(1);
  const [books, setBooks] = useState([]);
<<<<<<< HEAD
  const [total, setTotal] = useState("");
  const [saves, setSaves] = useState([]);
  const context = useContext(AppContext);

  const fetchBooks = async () => {
    if (context?.user?.id) {
      const res = await cartAPI.getCart(context.user.id);
      console.log("9-->>", res);
      if (res.status === 200) {
        setBooks(res.data);
      }
    }
  };
  useEffect(() => {
=======
  const [total, setTotal] = useState(0);

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

>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
    fetchBooks();
  }, []);
  const calculateTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < books.length; i++) {
      totalPrice += books[i].totalPrice;
    }
    setTotal(totalPrice);
  };
<<<<<<< HEAD
  const updateQuantity = (bookId, newQuantity) => {
    console.log("..., ", bookId, newQuantity);
    // setBooks((prevBooks) =>
    //   prevBooks.map((book) => {
    //     if (book.id === bookId) {
    //       return {
    //         ...book,
    //         quantity: newQuantity,
    //         totalPrice: book.price * newQuantity,
    //       };
    //     }
    //     return book;
    //   })
    // );
  };
  // Gọi hàm calculateTotal khi books thay đổi
  useEffect(() => {
    calculateTotal();
  }, [books]);
=======

>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
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
<<<<<<< HEAD
                  {total}VND
=======
                  US$ {}
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
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
<<<<<<< HEAD
                onUpdateQuantity={updateQuantity}
=======
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
              />
              <div className='custom-border-bottom'></div>
<<<<<<< HEAD
=======
              {book.price}{" "}
              {/* Cộng dồn giá của từng cuốn sách */}
>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
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

<<<<<<< HEAD
=======
        <div className='save-for-later'>
          <SaveForLater />
        </div>

>>>>>>> 255bb4336c3d59d2b8db0ce8f05fd2d24b6404a9
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
