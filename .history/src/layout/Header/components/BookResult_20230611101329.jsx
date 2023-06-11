import React from "react";
import "./BookResult.css";
import { Link } from "react-router-dom";

const BookResult = ({ data }) => {
  console.log(44, data);
  return (
    <div>
      <Link className='book-result-wrapper-link'>
        <div className='book-result-wrapper'>
          <img
            src={data?.avatar}
            alt='book'
            className='book-img-result'
          />
          <p className='book-name-result'>{data?.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookResult;
