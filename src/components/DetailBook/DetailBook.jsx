import React from "react";
import './DetailBook.css';
import axios from "axios";
import { useEffect, useState } from "react";
const DetailBook = () => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        fetchBookData();
    }, []);

    const fetchBookData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            setBookData(response.data);
            console.log(bookData);
        } catch (error) {
            console.error(error);
        }
    };
    if(bookData)
    {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 align-self-start small px-0">
                    <div className="breadcrumb-section p-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 bg-white">
                                <li className="breadcrumb-item">
                                    <a className="link-body-emphasis" href="../../index.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                        </svg>
                                        <span className="visually-hidden">Home</span>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    My account
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="border-bottom pb-2">
                        <h5 className="fw-bold mb-0">{bookData.id}</h5>
                        <a href="" className="fw-bolder link-info"><span>Ellis, Bret Easton</span></a>
                        <div className="d-flex align-items-center mt-2">
                            <div className="star-ratings">
                                <span className="star text-warning">&#9733;</span>
                                <span className="star text-warning">&#9733;</span>
                                <span className="star text-warning">&#9733;</span>
                                <span className="star text-warning">&#9733;</span>
                                <span className="star text-warning">&#9733;</span>
                            </div>
                            <span className="me-2 ml-2 mr-0">4.01 avg rating</span>
                            <span className="me-2 mr-0">•</span>
                            <span className="me-2">4,246 ratings by Goodreads</span>
                        </div>
                    </div>
                    <div className="row pt-3 mx-0">
                        <div className="col-md-3 pr-4 pl-0">
                            <div>
                                <img src="https://book-store-git-tiendat-taed13.vercel.app/assets/images/template/book1.jpg" alt="" className="img-fluid mt-1"
                                    style={{ width: '100%', height: '100%;' }} />
                            </div>
                        </div>
                        <div className="col-md-9 px-0">
                            <div className="book-conver-type">
                                <h5 className="font-weight-normal my-0"><span>Hardcover</span></h5>
                            </div>
                            <div className="isbn">
                                <p className="font-weight-normal my-0"><span>ISBN 10: 059353560X / ISBN 13: 9780593535608</span>
                                </p>
                            </div>
                            <div className="publisher my-0">
                                <p className="font-weight-normal mt-0"><span>Publisher: Knopf, 2023</span>
                                </p>
                            </div>
                            <div className="isbn-edition my-0 d-flex text-center">
                                <p><i className='fas fa-greater-than'></i></p>
                                <a href="" className="link-dark">
                                    <p className="font-weight-normal">View all copies of this ISBN edition:</p>
                                </a>
                            </div>
                            <div className="new-used d-flex">
                                <div className="new d-flex flex-column rounded-2 bg-light shadow mr-2 col-3 p-2">
                                    <a href="" className="link-dark">
                                        <div className="link-info">45 New</div>from<span className="link-danger"> US$
                                            14.44</span>
                                    </a>
                                </div>
                                <div className="new d-flex flex-column rounded-2 bg-light shadow mr-2 col-3 p-2">
                                    <a href="" className="link-dark">
                                        <div className="link-info">45 Used</div>from<span className="link-danger"> US$
                                            5.26</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex mt-4 border-bottom">
                                <div className="d-block col-6 px-0">
                                    <div className="isbn-edition my-0 d-flex text-center">
                                        <p><i className='fas fa-greater-than'></i></p>
                                        <a href="" className="link-dark">
                                            <p className="font-weight-normal">View all formats and editions of this title:</p>
                                        </a>
                                    </div>
                                    <div className="new-used d-flex mx-0 px-0 justify-content-evenly">
                                        <div className="new d-flex flex-column rounded-5 bg-light shadow p-2 col-5">
                                            <a href="" className="link-dark text-decoration-none text-center">
                                                <div>Softcover (527)</div>
                                                from <span className="link-danger"> US$ 14.44 </span>
                                            </a>
                                        </div>
                                        <div className="new d-flex flex-column rounded-5 bg-light shadow p-2 col-5">
                                            <a href="" className="link-dark text-decoration-none text-center">
                                                <div>Hardcover (527)</div>
                                                from <span className="link-danger"> US$ 14.44 </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-block col-6 px-0">
                                    <div className="isbn-edition my-0 d-flex text-center">
                                        <p><i className='fas fa-greater-than'></i></p>
                                        <a href="" className="link-dark">
                                            <p className="font-weight-normal"> View all collectible editions of this title:</p>
                                        </a>
                                    </div>
                                    <div className="new-used d-flex mx-0 px-0 justify-content-evenly">
                                        <div className="new d-flex flex-column rounded-5 bg-light shadow p-2 mb-3 col-5">
                                            <a href="" className="link-dark text-decoration-none text-center">
                                                <div>First Edition (527)</div>
                                                <div>View Offers</div>
                                            </a>
                                        </div>
                                        <div className=" new d-flex flex-column rounded-5 bg-light shadow p-2 mb-3 col-5">
                                            <a href="" className="link-dark text-decoration-none text-center">
                                                <div>First Edition (527)</div>
                                                <div>View Offers</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div className="">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active link-danger" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">Tóm tắt</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link link-danger" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="false">Về tiêu đề</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link link-danger" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                                aria-selected="false">Contact</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="tab-content" id="myTabContent" style={{ height: '50%' }}>
                                        <div className="tab-pane fade show active" id="home" role="tabpanel"
                                            aria-labelledby="home-tab">Set at a small, affluent liberal-arts college in New
                                            England at the height of the Reagan 80s, The Rules of Attraction is a
                                            startlingly funny, kaleidoscopic novel about three students with no plans for
                                            the future--or even the present--who become entangled in a curious romantic
                                            triangle. Bret Easton Ellis trains his incisive gaze on the kids at
                                            self-consciously bohemian Camden College and treats their sexual posturings and
                                            agonies with a mixture of acrid hilarity and compassion while exposing the moral
                                            vacuum at the center of their lives.

                                            Lauren changes boyfriends every time she changes majors and still pines for
                                            Victor who split for Europe months ago and she might or might not be writing
                                            anonymous love letter to ambivalent, hard-drinking Sean, a hopeless romantic who
                                            only has eyes for Lauren, even if he ends up in bed with half the campus, and
                                            Paul, Lauren's ex, forthrightly bisexual and whose passion masks a shrewd
                                            pragmatism. They waste time getting wasted, race from Thirsty Thursday Happy
                                            Hours to Dressed To Get Screwed parties to drinks at The Edge of the World or
                                            The Graveyard. The Rules of Attraction is a poignant, hilarious take on the
                                            death of romance.

                                            Note: FIRST PAGE OF TEXT STARTS IN MIDDLE OF A SENTENCE, THIS IS THE WAY IT IS
                                            SUPPOSE TO BE & INTENTIONALLY STARTS ON PAGE 13
                                            "synopsis" may belong to another edition of this title.</div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel"
                                            aria-labelledby="profile-tab">
                                            From the Back Cover:
                                            "Inspired. A wonderfully comic novel." --Gore Vidal

                                            "Ellis is, first and last, a moralist. Under cover of his laconic voice, every
                                            word in his [novels] springs from grieving outrage at our spiritual condition."
                                            --Los Angeles Times Book Review

                                            "Serves to establish Mr. Ellis's reputation further as one of the primary inside
                                            sources in upper-middle-className America's continuing investigation of what has
                                            happened to its children." --The New York Times Book Review
                                            About the Author:
                                            Bret Easton Ellis is the author of Less Than Zero, The Rules of Attraction,
                                            American Psycho, The Informers, Glamorama, Lunar Park, and Imperial Bedrooms.
                                            His works have been translated into twenty-seven languages. Less Than Zero, The
                                            Rules of Attraction, American Psycho, and The Informers have all been made into
                                            films. He lives in Los Angeles.
                                            "About this title" may belong to another edition of this title.</div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel"
                                            aria-labelledby="contact-tab">
                                            ...</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 px-0">
                    <div className="buy-new border mt-2 rounded-top-2 mx-3">
                        <div className="learn-more d-flex flex-column small mx-2 mt-2">
                            <b>Buy New</b>
                            <a href="">Learn more about this copy</a>
                        </div>
                        <div className="pricing d-flex flex-column mt-2 mx-2">
                            <span className="text-danger fw-bolder">
                                <h4 className="mb-0">US$ 11.73</h4>
                            </span>
                            <a href="" className="small">Convert currency</a>
                        </div>
                        <div className="shipping d-flex flex-column small mx-2">
                            <div className="d-flex align-items-center">
                                <b>Shipping</b>
                                <span className="ml-2"><i className="fas fa-shipping-fast fa-sm" style={{ color: '#c0457c' }}></i>
                                    FREE</span>
                            </div>
                            <small>Within U.S.A</small>
                            <a href="">Destination, rates & speeds</a>
                        </div>
                        <div className="add-to-basket text-center mb-4 mx-2 mt-2">
                            <a href="#" className="text-light bg-danger rounded-2 d-block mx-auto text-decoration-none py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                Add to basket
                            </a>
                        </div>
                    </div>
                    <div className="buy-used border rounded-bottom-2 mx-3">
                        <div className="learn-more d-flex flex-column small mx-2 mt-2">
                            <b>Buy New</b>
                            <a href="">Learn more about this copy</a>
                        </div>
                        <div className="pricing d-flex flex-column mt-2 mx-2">
                            <span className="text-danger fw-bolder">
                                <h4 className="mb-0">US$ 11.73</h4>
                            </span>
                            <a href="" className="small">Convert currency</a>
                        </div>
                        <div className="shipping d-flex flex-column small mx-2">
                            <div className="d-flex align-items-center">
                                <b>Shipping</b>
                                <span className="ml-2"><i className="fas fa-shipping-fast fa-sm" style={{ color: '#c0457c' }}></i>
                                    FREE</span>
                            </div>
                            <small>Within U.S.A</small>
                            <a href="">Destination, rates & speeds</a>
                        </div>
                        <div className="add-to-basket text-center mb-4 mx-2 mt-2">
                            <a href="#" className="text-light bg-danger rounded-2 d-block mx-auto text-decoration-none py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                Add to basket
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-3 mx-3"><a href="" className="">30 Day Return Policy</a></div>
                </div>
            </div>
        </div>
    )
    }
}

export default DetailBook;