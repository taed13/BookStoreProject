import React, { useEffect, useState } from "react";
import DetailBook from "../../components/DetailBook/DetailBook";
import { useParams } from "react-router-dom";
import ListBook from "../../components/ListBook/ListBook";
import bookAPI from "../../api/bookAPI";

const BookDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getBookDetail = async (id) => {
    const res = await bookAPI.getInformation(id);
    // if()
    console.log("--->>>>", res);
    if (res.status === 200) {
      setData(res.data);
    }
  };
  useEffect(() => {
    getBookDetail(id);
  }, []);
  return (
    <>
      <DetailBook data={data} />
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
