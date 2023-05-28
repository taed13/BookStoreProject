import React from "react";
import { Link } from "react-router-dom";

const BookItem = () => {
	return (
		<div className="feature col">
			<img src="https://book-store-bay.vercel.app/assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
			<Link to="/book/detail" className="icon-link mt-2 text-danger text-wrap">
  				The Rules of Attraction
			</Link>

			<p className="m-0">Ellis, Bret Easton</p>

		</div>
	)

}

export default BookItem;