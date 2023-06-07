import React from "react";
import './Basket.css';
import BookProductPay from "../../components/BookProductPay/BookProductPay";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import CouponCode from "../../components/CouponCode/CouponCode";
import { Link } from "react-router-dom";
import SaveForLater from "../../components/SaveForLater/SaveForLater";
import ListBook from "../../components/ListBook/ListBook";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Basket = () => {
    const [basketData, setBasketData] = useState(null);

    useEffect(() => {
        fetchBasketData();
    }, []);

    const fetchBasketData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            setBasketData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic khi người dùng nhấn nút "Proceed to Checkout"
        navigate("/payment");
    };
    return (
        <>
            <div className="container p-0">
                <div className="pageHeader mb-2">
                    <h1>Giỏ Hàng Của Tôi</h1>
                </div>
                <div style={{ display: 'flex' }} className="pageHeader">
                    <div style={{ flex: 6 }}>
                        <ShippingForm />
                    </div>
                    <div style={{ flex: 2 }}>
                        <div className="couponList text-danger font-weight-bold">
                            <nobr>
                                <span className="price" tabindex="0" aria-label="Your order total is US$ 115.48">US$ 115.48</span>
                            </nobr>
                            <br />
                        </div>
                    </div>
                    <div style={{ flex: 2 }}>
                        <form
                            method="post"
                            action="/servlet/ShoppingBasket"
                            name="proceedToCheckout"
                            className="nopadding"
                            onSubmit={handleSubmit}
                        >
                            <img
                                src="https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/proceedcheckout.gif"
                                alt="Proceed to Checkout"
                                className="checkout-button-img btn btn-primary btn-light"
                                onClick={handleSubmit}
                            />
                        </form>
                    </div>
                </div>

                <div className="container p-0 custom-border rounded-3 my-3">
                    <div style={{ backgroundColor: 'rgb(221, 221, 221)' }} className="py-2">

                        <div style={{ display: 'flex' }} className="pageHeader">
                            <div style={{ flex: 6 }} className="">
                                <strong className="pl-2">Vật phẩm trong giỏ hàng (2 vật phẩm)</strong>
                            </div>
                            <div style={{ flex: 2 }}>
                                <div className="row">
                                    <div className="col">
                                        <strong>Giá</strong>
                                    </div>
                                    <div className="col">
                                        <strong>Số lượng</strong>
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 2 }}>
                                {/* <div className="row">??</div> */}
                            </div>

                        </div>
                    </div>
                    <BookProductPay />
                    <div className="custom-border-bottom"></div>
                    <BookProductPay />
                </div>

                <div className="coupon-code">
                    <CouponCode />
                </div>

                <div className="order-total">
                    <div style={{ display: 'flex' }} className="pageHeader">
                        <div style={{ flex: 6 }}>
                            <Link to="/">
                                <img
                                    src="https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/abebookshome.gif"
                                    alt="Home"
                                    className="your-img-class"
                                />
                            </Link>
                            <br />
                            <small><input type="button" value="E-mail me my basket" className="btn-secondary my-1" /></small>
                        </div>
                        <span className="text-danger font-weight-bold">Order Total:</span>
                        <div style={{ flex: 2 }}>
                            <div className="couponList text-danger font-weight-bold">
                                <nobr>
                                    <span className="price" tabindex="0" aria-label="Your order total is US$ 115.48">US$ 115.48</span>
                                </nobr>
                                <br />
                            </div>
                        </div>
                        <div style={{ flex: 2 }}>
                            <form
                                method="post"
                                action="/servlet/ShoppingBasket"
                                name="proceedToCheckout"
                                className="nopadding"
                                onSubmit={handleSubmit}
                            >
                                <img
                                    src="https://assets.prod.abebookscdn.com/cdn/com/images/servlets/ShoppingBasket/proceedcheckout.gif"
                                    alt="Proceed to Checkout"
                                    className="checkout-button-img btn btn-primary btn-light"
                                    onClick={handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="save-for-later">
                    <SaveForLater />
                </div>

                <div className="customers-who-bought-items">
                    <ListBook title={'Khách hàng mua những sản phẩm này cũng đã mua'} />
                </div>
            </div>
        </>
    )
}

export default Basket;