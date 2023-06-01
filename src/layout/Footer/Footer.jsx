import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <footer className="alert-danger text-center text-black">
        <div className="container p-4">
          <section className="d-flex flex-column mb-3 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up p-0 text-danger"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            <Link to="#top-header" className="texdan p-0 link-danger">
              Back to top
            </Link>
          </section>

          <section className="mb-4">
            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>

            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>

            <Link
              to="#!"
              className="btn btn-outline-light btn-floating m-1"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

				<div className="col-md-5 col-12">
					<div className="form-outline form-white mb-4">
						<input
						type="email"
						id="form5Example21"
						className="form-control bg-white text-danger"
						placeholder="Email address"
						/>
					</div>
				</div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-dark mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <Link to="#" className="link-danger text-decoration-none">
                  <h5 className="text-uppercase">Shop With Us</h5>
                </Link>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#" className="text-white">
                      Advanced Search
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Browse Collections
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      View Basket
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <Link className="text-white" to="https://mdbootstrap.com/">
            MDBootstrap.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
