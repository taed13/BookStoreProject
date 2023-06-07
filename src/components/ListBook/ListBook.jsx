import React, { useEffect, useState } from "react";
import BookItem from "../BookItem/BookItem";
import axios from "../../api/axiosClient";

const ListBook = ({ title }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách sách
    axios
      .get("/posts")
      .then((response) => {
        setBookList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book list:", error);
      });
  }, []);

  return (
    <div className="recommended-items px-0 border container my-3 rounded-2">
      <div className="container p-0" id="featured-3">
        <strong>
          <h4 className="pl-2" style={{ backgroundColor: "#dddddd" }}>
            {title}
          </h4>
        </strong>
        <div className="row g-4 row-cols-1 row-cols-lg-5 container m-0">
          {bookList.map((book) => (
            <BookItem
              key={book.id}
              bookData={{ id: book.id, title: book.id, author: book.body }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBook;
