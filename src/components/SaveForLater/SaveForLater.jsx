import React from 'react';
import BookProductPay from '../BookProductPay/BookProductPay';

const SaveForLater = () => {
    return (
        <>
        <div className="container p-0 custom-border rounded-3 my-3">
            <div style={{ backgroundColor: 'rgb(221, 221, 221)' }} className="py-2">           
                <div style={{ display: 'flex' }} className="pageHeader">
                    <div style={{ flex: 6 }} className="">
                        <strong className="pl-2">Lưu lại sau này (0 vật phẩm)</strong>
                    </div>
                    <div style={{ flex: 2 }}>
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 2 }}>
                    </div>  
                </div>
            </div>
            <div className="no-items text-center">
                <p className='m-0 mt-2'>Bạn hiện không có mục nào được lưu cho sau này.</p>
                <p>Mua các mặt hàng trong giỏ hàng hiện tại của bạn bằng cách nhấp vào <strong>Proceed to Checkout</strong>.</p>
            </div>

            <div>
                
            </div>
        </div>
        </>
    )
}

export default SaveForLater;