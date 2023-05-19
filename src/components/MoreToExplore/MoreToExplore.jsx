import React from 'react';
import BookTitle from './BookTitle/BookTitle';

const MoreToExplore = () => {
	return (
		<div class="container-lg alert-danger rounded-2">
			<div class="row">
				<div class="col-md-4 d-flex mt-3">
					<div class="p-3">
						<h3 class="display-6 fw-bold">The Newbery Medal winners</h3>
						<p>Amina Luqman-Dawson, author of Freewater, has won the 2023 Newbery Medal for excellence
							in
							American children's literature. Learn more about Amina's historical novel and see all
							the
							past
							winners since 1922. The list includes Kate DiCamillo, Beverly Cleary, and Lois Lowry.
						</p>
						<button class="btn btn-outline-danger rounded-5 px-3">See the features</button>
					</div>
				</div>
				<div class="col-md-8 mt-4">
					<div class="card-columns">
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
						<BookTitle />
					</div>
				</div>


			</div>
		</div>
	)
}

export default MoreToExplore;