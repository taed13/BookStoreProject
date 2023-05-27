import React from "react";
import './ListBook.css';
import BookItem from "../BookItem/BookItem";

const ListBook = ({ title }) => {
	return (
		<div className="recommended-items px-0 border container my-3 rounded-2">
			<div className="container p-0" id="featured-3">
				<h2 className="pl-2" style={{ backgroundColor: '#dddddd' }}>{ title }</h2>
				<div className="row g-4 row-cols-1 row-cols-lg-5 container m-0">
					<BookItem />
					<BookItem />
					<BookItem />
					<BookItem />
					<BookItem />
				</div>
			</div>
		</div>
	)
}

export default ListBook;