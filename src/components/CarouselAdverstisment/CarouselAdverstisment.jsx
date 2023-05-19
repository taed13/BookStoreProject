import React from "react";

const CarouselAdverstisment = () => {
    return (
        <div className="page-lead">
            <div className="container-lg mt-4 px-0">
                <div className="row">
                    <div className="col-md-4 alert-danger rounded-3">

                        <div className="p-3">
                            <h1 className="display-6 fw-bold small pt-4 pb-2">SHOP FROM INDEPENDENT SELLERS</h1>
                            <h3 className="text-dark pb-4 font-weight-normal">Search for books, fine art and collectibles</h3>
                            <form>
                                <div className="mb-3">
                                    <label for="author" className="form-label mb-0"><span className="fw-bold">Author</span></label>
                                    <input type="text" className="form-control" id="author" placeholder="Enter author" />
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label mb-0"><span className="fw-bold">Title</span></label>
                                    <input type="text" className="form-control" id="title" placeholder="Enter title" />
                                </div>
                                <div className="mb-3">
                                    <label for="keyword" className="form-label mb-0"><span className="fw-bold">Keyword or
                                        ISBN</span></label>
                                    <input type="text" className="form-control" id="keyword"
                                        placeholder="Enter keyword or ISBN" />
                                </div>
                                <button type="submit" className="btn btn-danger rounded-5 w-25">Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8 rounded-2 pl-3 position-relative">
                        <div id="myCarousel" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div style={ { position: 'relative', height: '100%' } }>
                                        <img src="./assets/images/template/pagelead.webp" alt="Slide 1"
                                            className="img-fluid h-100 w-100 rounded-3"
                                            style={ { paddingBottom: '17vh', maxHeight: '100%', height: 'auto' } } />
                                    </div>
                                    <div
                                        className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                                        <div className="position-relative h-100">
                                            <a href="#" className="display-6 text-decoration-none link-dark">The world's
                                                most
                                                valuable
                                                children's
                                                books</a>
                                            <p className="py-2">Children's books can be valuable if they are the right edition
                                                in the right
                                                condition.
                                                Discover 10 books that command high prices.
                                            </p>
                                            <a href="#" className="icon-link link-secondary text-danger text-decoration-none">Go
                                                somewhere<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div style={ { position: 'relative', height: '100%' } }>
                                        <img src="./assets/images/template/pagelead.webp" alt="Slide 2"
                                            className="img-fluid h-100 w-100 rounded-3"
                                            style={ { paddingBottom: '17vh', maxHeight: '100%', height: 'auto' } } />
                                    </div>
                                    <div
                                        className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                                        <div className="position-relative h-100">
                                            <a href="#" className="display-6 text-decoration-none link-dark">The world's
                                                most
                                                valuable
                                                children's
                                                books</a>
                                            <p className="py-2">Children's books can be valuable if they are the right edition
                                                in the right
                                                condition.
                                                Discover 10 books that command high prices.
                                            </p>
                                            <a href="#" className="icon-link link-secondary text-danger">Go somewhere<svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div style={ { position: 'relative', height: '100%' } }>
                                        <img src="./assets/images/template/pagelead.webp" alt="Slide 3"
                                            className="img-fluid h-100 w-100 rounded-3"
                                            style={ { paddingBottom: '17vh', maxHeight: '100%', height: 'auto' } } />
                                    </div>
                                    <div
                                        className="col-md-12 col-lg-10 alert-light position-absolute bottom-0 left-0 rounded-right pt-4 pr-4">
                                        <div className="position-relative h-100">
                                            <a href="#" className="display-6 text-decoration-none link-dark">The world's
                                                most
                                                valuable
                                                children's
                                                books</a>
                                            <p className="py-2">Children's books can be valuable if they are the right edition
                                                in the right
                                                condition.
                                                Discover 10 books that command high prices.
                                            </p>
                                            <a href="#" className="icon-link link-secondary text-danger">Go somewhere<svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end pb-5 mb-5"
                                style={ { position: 'absolute', bottom: 0, right: 0 } }>
                                <button className="btn btn-secondary me-2 bg-danger carousel-button" type="button"
                                    data-bs-target="#myCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="btn btn-secondary bg-danger carousel-button" type="button"
                                    data-bs-target="#myCarousel" data-bs-slide="next">
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