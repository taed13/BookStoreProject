import React from "react";
import DetailBook from "../../components/DetailBook/DetailBook";
import ListBook from "../../components/ListBook/ListBook";

const BookDetail = () => {
    return (
        <>
        <DetailBook />
        <div className="more-results container px-0 my-2">
            <ListBook title={ 'Khách hàng mua sản phẩm này cũng đã mua' } />
            <div className="more-results text-center my-4">
                <h4>Xem thêm các ấn phẩm liên quan khác
                </h4>
                <button className="btn btn-outline-secondary alert-danger">Xem tất cả kết quả tìm kiếm</button>
            </div>
        </div>
        </>
    )
}

export default BookDetail;