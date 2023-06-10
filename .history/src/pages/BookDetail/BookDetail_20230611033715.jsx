import React, { useEffect } from "react";
import DetailBook from "../../components/DetailBook/DetailBook";
import { useParams } from "react-router-dom";
import ListBook from "../../components/ListBook/ListBook";
import bookAPI from "../../api/bookAPI";

const BookDetail = () => {
  const { id } = useParams();
  const getBookDetail = async (id) => {
    const res = await bookAPI.getInformation(id);
    // if()
    console.log("--->>>>", res);
  };
  useEffect(() => {
    getBookDetail(id);
  }, []);
  return (
    <>
      <DetailBook />
      <div className='more-results container px-0 my-2'>
        <ListBook
          title={"Khách hàng mua sản phẩm này cũng đã mua"}
        />
        <div className='more-results text-center my-4'>
          <h4>Xem thêm các ấn phẩm liên quan khác</h4>
          <button className='btn btn-outline-secondary alert-danger'>
            Xem tất cả kết quả tìm kiếm
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
