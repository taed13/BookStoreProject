import React from "react";

const CardItem = () => {
	return (
		<div className="col-sm-6 col-md-3">
			<div className="card shadow">
				<img src="https://book-store-bay.vercel.app/assets/images/template/cardimage.webp" className="card-img-top" alt="card-item" />
				<div className="card-body">
					<a href="#" className="card-title">Card title</a>
					<p className="card-text text-muted">Some quick example text to build on the card title and
						make
						up the bulk
						of
						the card's content.</p>
					<a href="#" className="icon-link link-secondary text-danger">Go somewhere<svg
						xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						className="bi bi-arrow-right" viewBox="0 0 16 16">
						<path fill-rule="evenodd"
							d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
					</svg></a>
				</div>
			</div>
		</div>
	)

}
export default CardItem;