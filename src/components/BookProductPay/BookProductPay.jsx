import React from "react";
import './BookProductPay.css';
import { Link } from "react-router-dom";

const BookProductPay = () => {
    return (
        <>
        <div className="container pl-3 my-2">
            <strong>Người bán: </strong>
            <a href="#">Lakeside Books (Benton Harbor MI, U.S.A.)</a>
            <a href="#" className="d-block">Terms of Sale</a>
        </div>
        <div style={{ display: 'flex' }} className="pageHeader border-bottom pb-2">
            <div style={{ flex: 6 }} className="">
                <div className="d-flex">
                    <div className="image pl-3">
                        <p>
                            <img src="https://pictures.abebooks.com/isbn/9780132350884-us.jpg" alt="Book cover" height={150} width={100}/>
                    </p>
                    </div>
                    <div className="bookInfo pl-3">
                        <small>
                            <Link to="/book-detail" className="p-0 m-0">
                                <strong><p className="bookTitle p-0 m-0">The Practice of Computing Using Python</p></strong>
                            </Link>
                            <p className="p-0 m-0">Ellis, Bret Easton</p>
                        </small>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2 }}>
                <div className="row">
                    <div className="col">
                        <div className="price">US$ 8.96</div>
                        <span>
                            <small><a href="#" className="n">Convert Currency</a></small>
                        </span>
                    </div>
                    <div className="col">
                        <div className="quantity">
                            <form action="" name="updateQuantity">
                                <small>
                                    <input type="number" name="quantity" id="quantity" min="1" max="10" defaultValue="1" className="w-25"/>(of <span>10</span>)
                                    <input type="submit" value="Update" className="mt-1 btn-secondary"/>
                                </small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <div className="flex-column pr-3">
                    <small className="w-25">
                        <form className="mb-1" action="" name="saveForLater">
                            <input type="submit" value="Save For Later" className="btn-secondary"/>
                        </form>
                        <form action="" name="remove">
                            <input type="submit" name="" id="" className="btn-secondary" value="Remove"/>
                        </form>
                    </small>   
                </div>
            </div>
        </div>
        <div style={{ display: 'flex' }} className="my-3">
            <div style={{ flex: 6, display: 'flex', justifyContent: 'flex-end'}}>
                <div className="flex-column">
                    <div className="text-right">
                        <label htmlFor="shippingSpeed" className="pr-3">Shipping:</label>
                    </div>
                    <form action="" className="mb-3 pr-2">
                        <select name="shippingSpeed" id="shippingSpeed">
                            <option value="standard">Standard shipping: 59 to 60 business days</option>
                            <option value="expedited">Standard shipping: 59 to 60 business days</option>
                            <option value="priority">Standard shipping: 59 to 60 business days</option>
                        </select>
                    </form>
                    <div className="text-right">
                        <label htmlFor="shippingSpeed" className="pr-2">Subtotal:</label>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2 }}>
                <div className="d-flex flex-column">
                    <div className="mb-auto shipping">US$ 3.99</div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="subtotal pt-5">US$ 12.95</div>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2 }}></div>
        </div>
        
        </>
    )
}

export default BookProductPay;