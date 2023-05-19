import React from "react";

const NewFeed = () => {
	return (
		<div className="container-lg alert-danger rounded-2 px-0">
			<div className="row">
				<div className="col m-4">
					<img src="https://book-store-bay.vercel.app/assets/images/template/imagemedia.webp" alt="placeholder image" className="w-100 rounded-2" />
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<div className="p-3">
						<a href="#" className="text-danger fw-bold">
							BOOKS
						</a>
						<h3 className="display-6 fw-bold">The Newbery Medal winners</h3>
						<p>Amina Luqman-Dawson, author of Freewater, has won the 2023 Newbery Medal for excellence in
							American children's literature. Learn more about Amina's historical novel and see all the
							past
							winners since 1922. The list includes Kate DiCamillo, Beverly Cleary, and Lois Lowry.</p>
						<button className="btn btn-outline-danger rounded-5 px-3">See the list</button>
					</div>
				</div>
			</div>
		</div>
	)

}
export default NewFeed;