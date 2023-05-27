import React from "react";
import { Link } from "react-router-dom";
import './CouponCode.css';

const CouponCode = () => {
    return (
        <>
        <div className="container border-custom rounded-3 p-0 my-2">
            <div style={{ display: 'flex' }} className="my-3">
                <div style={{ flex: 6, display: 'flex', justifyContent: 'flex-end'}}>
                    <div className="flex-column">
                        <div className="text-right">
                            <label htmlFor="" className="pr-3">Have a Coupon Code? Enter it here and click Update:</label>
                        </div>
                        <div className="text-right">
                            <Link to="/checkout" className="text-right pr-3">Terms and Conditions</Link>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 2 }}>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="" id="" className="w-100"/>
                        </div>
                        <div className="col">
                            <input type="submit" name="" id="" className="w-100 btn-secondary" value="Apply coupon code"/>
                        </div>
                    </div>  
                </div>
                <div style={{ flex: 2 }}>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CouponCode;