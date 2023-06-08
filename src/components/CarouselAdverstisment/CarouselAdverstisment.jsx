import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axiosClient";
import './CarouselAdverstisment.css';
import { useEffect } from "react";
const CarouselAdverstisment = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios.get('https://example.com/api/images')
      .then(response => {
        const imageData = response.data;
        const urls = imageData.map(item => item.image_url).slice(0, 3);
        setImageUrls(urls);
      })
      .catch(error => {
        console.error('Lỗi khi lấy danh sách hình ảnh:', error);
      });
  }
  const handleSearch = (e) => {
    e.preventDefault();

    // Gửi dữ liệu tìm kiếm lên backend
    axios.post('/posts', {
      author,
      title,
      keyword
    })
      .then(response => {
        // Xử lý kết quả từ backend (nếu cần)
        console.log(response.data);
      })
      .catch(error => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  };

  return (
    <div className="page-lead">
      <div className="container-lg mt-4 px-0">
        <div className="row">
          <div className="col-md-4 alert-danger rounded-3">
            <div className="p-3">
              <h1 className="display-6 fw-bold small pt-4 pb-2">TÌM KIẾM CÁC ĐẦU SÁCH MONG MUỐN</h1>
              <h3 className="text-dark pb-4 font-weight-normal">Tìm kiếm sách, sách giáo khoa, sách hiếm...</h3>
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label mb-0"><span className="fw-bold">Tác giả</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Nhập tác giả"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label mb-0"><span className="fw-bold">Tiêu đề</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Nhập tiêu đề"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="keyword" className="form-label mb-0"><span className="fw-bold">Từ khoá</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="keyword"
                    placeholder="Nhập từ khoá của sách"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-danger rounded-5 w-25">Tìm kiếm</button>
              </form>
            </div>
          </div>


          <div className="col-md-8 rounded-2 pl-3 position-relative">
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div style={{ position: 'relative', height: '100%' }}>
                    <img src="https://book-store-bay.vercel.app/assets/images/template/pagelead.webp" alt="Slide 1" className="img-fluid h-100 w-100 rounded-3" style={{ paddingBottom: '17vh', maxHeight: '100%', height: 'auto' }} />
                  </div>
                  <div className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                    <div className="position-relative h-100">
                      <Link to="#" className="display-6 text-decoration-none link-dark">The world's most valuable children's books</Link>
                      <p className="py-2">Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.</p>
                      <Link to="#" className="icon-link link-secondary text-danger text-decoration-none">Go somewhere<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div style={{ position: 'relative', height: '100%' }}>
                    <img src="https://book-store-bay.vercel.app/assets/images/template/pagelead.webp" alt="Slide 2" className="img-fluid h-100 w-100 rounded-3" style={{ paddingBottom: '17vh', maxHeight: '100%', height: 'auto' }} />
                  </div>
                  <div className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                    <div className="position-relative h-100">
                      <Link to="#" className="display-6 text-decoration-none link-dark">The world's most valuable children's books</Link>
                      <p className="py-2">Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.</p>
                      <Link to="#" className="icon-link link-secondary text-danger">Go somewhere<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div style={{ position: 'relative', height: '100%' }}>
                    <img src="https://book-store-bay.vercel.app/assets/images/template/pagelead.webp" alt="Slide 3" className="img-fluid h-100 w-100 rounded-3" style={{ paddingBottom: '17vh', maxHeight: '100%', height: 'auto' }} />
                  </div>
                  <div className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                    <div className="position-relative h-100">
                      <Link to="#" className="display-6 text-decoration-none link-dark">The world's most valuable children's books</Link>
                      <p className="py-2">Children's books can be valuable if they are the right edition in the right condition. Discover 10 books that command high prices.</p>
                      <Link to="#" className="icon-link link-secondary text-danger">Go somewhere<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end pb-5 mb-5" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <button className="btn btn-secondary me-2 bg-danger carousel-button" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="btn btn-secondary bg-danger carousel-button" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselAdverstisment;
