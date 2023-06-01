import React from 'react';
import BookTitle from './BookTitle/BookTitle';

const MoreToExplore = () => {
	return (
		<div className="container-lg alert-danger rounded-2">
			<div className="row">
				<div className="col-md-4 d-flex mt-3">
					<div className="p-3">
						<h3 className="display-6 fw-bold">Khám phá nhiều hơn</h3>
						<p>AbeBooks thường xuyên xuất bản các tính năng hấp dẫn
							về rất nhiều chủ đề mê sách, nhà xuất bản và các nhân vật thú vị
							trong văn học và các ngày kỷ niệm đáng chú ý.
						</p>
						<button className="btn btn-outline-danger rounded-5 px-3 mt-3">Xem các tính năng</button>
					</div>
				</div>
				<div className="col-md-8 mt-4">
					<div className="card-columns">
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