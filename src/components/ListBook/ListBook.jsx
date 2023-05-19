import React from "react";
import './ListBook.css';
import BookItem from "../BookItem/BookItem";

const ListBook = ({ title }) => {
	return (
		<div className="recommended-items px-0">
			<div className="container px-3 py-3" id="featured-3">
				<h2 className="pb-2">{ title }</h2>
				<div className="row g-4 pb-4 mt-4 row-cols-1 row-cols-lg-5">
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