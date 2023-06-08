import React from 'react';

const ProductPayment = () => {
    return (
        <>
        <div className="d-flex flex-row flex-wrap border rounded-4">
            <div className="p-3" style={{ flexBasis: "25%", textAlign: "center" }}>
                <img src="https://pictures.abebooks.com/isbn/9780385547345-us.jpg" alt="Product" className="img-fluid w-100 rounded-3" />
            </div>
            <div className="p-3" style={{ flexBasis: "75%" }}>
                <p className='font-weight-bold'>Tiêu đề sách</p>
                <p>Giá <span className='font-weight-bold'>1.090.000đ</span> <span><del>1.399.000đ</del></span></p>
                <p>Số lượng: <span className='font-weight-bold'>1</span></p>
                <p>Tổng tiền <span className='font-weight-bold'>1.000.000đ</span></p>
            </div>
        </div>
        </>
    )
}

export default ProductPayment;
