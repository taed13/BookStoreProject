import React from "react";

const BookItem = () => {
	return (
		<div className="feature col">
			<img src="https://book-store-bay.vercel.app/assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
			<a href="./search-advanced.html" className="icon-link mt-2 text-danger text-wrap">
				The Rules of Attraction
			</a>
			<p className="m-0">Ellis, Bret Easton</p>

		</div>
	)

}

export default BookItem;