import React from "react";
import { Link } from "react-router-dom";
import ListBook from "../ListBook/ListBook";

const BookItem = ({ bookData }) => {
  const { id, name, author, avatar } = bookData;
  console.log("bookData", bookData);

  return (
    <div className='feature col'>
      {avatar && (
        <img
          src={avatar}
          alt={id}
          className='img-thumbnail mx-auto d-block'
        />
      )}

      <Link
        to={`/book/${id}`}
        className='icon-link mt-2 text-danger text-wrap'
        onClick={() => {
          localStorage.setItem(
            "IDbook",
            JSON.stringify(bookData.id)
          );
        }}
      >
        {name}
      </Link>
    </div>
  );
};

export default BookItem;
