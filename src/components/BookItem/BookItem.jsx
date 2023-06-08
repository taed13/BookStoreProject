import React from "react";
import { Link } from "react-router-dom";
import ListBook from "../ListBook/ListBook";

const BookItem = ({ bookData }) => {
  const { id, title, author, image } = bookData;

  return (
    <div className="feature col">
      <img src={image} alt={id} className="img-thumbnail mx-auto d-block" />
      <Link
        to={{ pathname: "/book/detail", state: { bookData } }}
        className="icon-link mt-2 text-danger text-wrap"
        onClick={() => { localStorage.setItem("IDbook", JSON.stringify(bookData.id)) }}
      >
        {title}
      </Link>
      <p className="m-0">{author}</p>
    </div>
  );
};


export default BookItem;


