import React from 'react';
import BookProductPay from '../../components/BookProductPay/BookProductPay';

const EmailList = () => {
    return (
        <div className='container p-0 mt-2'>
            <h4>E-mail của tôi</h4>

            <div className="pl-2">
                <small><p>Theo mặc định, các tin nhắn được hiển thị theo thứ tự từ mới nhất tới cũ nhất</p></small>
                <div className="container p-0 custom-border rounded-3 my-3">
                    <div style={{ backgroundColor: 'rgb(221, 221, 221)' }} className="py-2">
                        <div style={{ display: 'flex' }} className="pageHeader">
                            <div style={{ flex: 6 }} className="">
                                <strong className="pl-2">Tên: </strong><span>datamin</span>
                                <strong className="pl-2">Email: </strong><span>tiendatpot@gmail.com</span>
                            </div>
                            <div style={{ flex: 2 }}>

                            </div>
                            <div style={{ flex: 2 }}>
 
                            </div>
                            
                        </div>
                    </div>
                    <BookProductPay />
                    <div className="custom-border-bottom"></div>
                    <BookProductPay />
                </div>
            </div>
        </div>
    )
}

export default EmailList;