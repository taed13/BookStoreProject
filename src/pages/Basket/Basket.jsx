import React from "react";
import './Basket.css';
import BookProductPay from "../../components/BookProductPay/BookProductPay";
import ShippingForm from "../../components/ShippingForm/ShippingForm";

const Basket = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic khi người dùng nhấn nút "Proceed to Checkout"
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

                <div className="container p-0 border rounded-3 my-3">
                    <div style={{ backgroundColor: 'rgb(221, 221, 221)' }} className="py-2">
                        
                        <div style={{ display: 'flex' }} className="pageHeader">
                            <div style={{ flex: 6 }}>
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
                    <div className="border-bottom"></div>
                    <BookProductPay />
                </div>
            </div>
        </>
    )}

export default Basket;