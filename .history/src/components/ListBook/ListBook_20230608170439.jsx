import React from "react";
import BookItem from "../BookItem/BookItem";
import "../../api/axiosClient";

const ListBook = ({ title, bookList }) => {
  if (bookList) {
    console.log(bookList);
    return (
      <div className='recommended-items px-0 border container my-3 rounded-2'>
        <div className='container p-0' id='featured-3'>
          <strong>
            <h4
              className='pl-2'
              style={{ backgroundColor: "#dddddd" }}
            >
              {title}
            </h4>
          </strong>
          <div className='row g-4 row-cols-1 row-cols-lg-5 container m-0'>
            {bookList.map((book) => (
              <BookItem
                key={book.id}
                bookData={{
                  id: book.id,
                  title: book.name,
                  author: book.authorName,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ListBook;
