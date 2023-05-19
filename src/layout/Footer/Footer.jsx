import React from 'react';

const Footer = () => {
	return (
		<div className="footer mt-5">

			<footer className="alert-danger text-center text-black">

				<div className="container p-4">
					<section className="d-flex flex-column mb-3 align-items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							className="bi bi-arrow-up p-0 text-danger" viewBox="0 0 16 16">
							<path fill-rule="evenodd"
								d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
						</svg>
						<a className="texdan p-0 link-danger" href="#top-header" data-cms-ai="0">Back to top</a>
					</section>

					<section className="mb-4">

						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-facebook-f"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-twitter"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-google"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-instagram"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-linkedin-in"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
							className="fab fa-github"></i></a>
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
										<input type="email" id="form5Example21" className="form-control"
											placeholder="Email address" />
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



					<section class="mb-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
							repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
							eum harum corrupti dicta, aliquam sequi voluptate quas.
						</p>
					</section>


					<section class="">

						<div class="row">

							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<a href="#" class="link-danger text-decoration-none">
									<h5 class="text-uppercase">Shop With Us</h5>
								</a>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">Advanced Search</a>
									</li>
									<li>
										<a href="#!" class="text-white">Browse Collections</a>
									</li>
									<li>
										<a href="#!" class="text-white">My Account</a>
									</li>
									<li>
										<a href="#!" class="text-white">My Orders</a>
									</li>
									<li>
										<a href="#!" class="text-white">View Basket</a>
									</li>
								</ul>
							</div>



							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">Link 1</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 2</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 3</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 4</a>
									</li>
								</ul>
							</div>



							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">Link 1</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 2</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 3</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 4</a>
									</li>
								</ul>
							</div>



							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">Link 1</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 2</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 3</a>
									</li>
									<li>
										<a href="#!" class="text-white">Link 4</a>
									</li>
								</ul>
							</div>

						</div>

					</section>

				</div>



				<div class="text-center p-3" style={ { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }>
					© 2020 Copyright:
					<a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				</div>

			</footer >

		</div >

	)
}

export default Footer;