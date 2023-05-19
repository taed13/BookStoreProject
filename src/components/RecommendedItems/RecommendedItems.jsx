import React from "react";
import './RecommendedItems.css';

const RecommendedItems = ({ title }) => {
	return (
		<div className="recommended-items px-0">
			<div className="container px-3 py-3" id="featured-3">
				<h2 className="pb-2">{ title }</h2>
				<div className="row g-4 pb-4 mt-4 row-cols-1 row-cols-lg-5">
					<div className="feature col">
						<img src="./assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
						<a href="./search-advanced.html" className="icon-link mt-2 text-danger text-wrap">
							The Rules of Attraction
						</a>
						<p className="m-0">Ellis, Bret Easton</p>

					</div>
					<div className="feature col">
						<img src="./assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
						<a href="#" className="icon-link mt-2 text-danger text-wrap">
							Imperial Bedrooms (Vintage Contemporaries)
						</a>
						<p className="m-0">Ellis, Bret Easton</p>

					</div>
					<div className="feature col">
						<img src="./assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
						<a href="#" className="icon-link mt-2 text-danger text-wrap">
							Glamorama (Vintage Contemporaries)
						</a>
						<p className="m-0">Ellis, Bret Easton</p>

					</div>
					<div className="feature col">
						<img src="./assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
						<a href="#" className="icon-link mt-2 text-danger text-wrap">
							The Rules of Attraction
						</a>
						<p className="m-0">Ellis, Bret Easton</p>

					</div>
					<div className="feature col">
						<img src="./assets/images/template/book1.jpg" alt="1" className="img-thumbnail mx-auto d-block" />
						<a href="#" className="icon-link mt-2 text-danger text-wrap">
							The Rules of Attraction
						</a>
						<p className="m-0">Ellis, Bret Easton</p>

					</div>
				</div>
			</div>
		</div>
	)
}

export default RecommendedItems;