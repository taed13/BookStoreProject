import React from "react";

const Register = () => {
	return (
		<div className="bg-white border rounded-5">
			<div className="row">
				<div className="col-sm-6 px-0 d-none d-sm-block">
					<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
						alt="Login image" className="w-100 vh-100 rounded-4 img-bg" />
				</div>
				<div className="col-sm-6 text-black">

					<div className="p-5 ms-xl-4 text-center">
						<a href="../../index.html" className="text-decoration-none">
							<svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" fill="currentColor"
								className="bi bi-book text-danger" viewBox="0 0 16 16">
								<path
									d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z">
								</path>
							</svg>
							<span className="ml-2 h1 fw-bold display-6 link-dark">AbeBooks</span>
						</a>
					</div>

					<div
						className="d-flex align-items-center justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

						<form className="form-register">

							<h3 className="fw-normal mb-3 pb-3 fw-bolder" style={ { letterSpacing: '1px' } }>Sign up</h3>
							<div className="row">
								<div className="col-md-6 mb-4">
									<div className="form-outline">
										<input type="text" id="form3Example1" className="form-control" />
										<label className="form-label ml-0" for="form3Example1">First
											name</label>
										<div className="form-notch">
											<div className="form-notch-leading" style={ { width: '9px' } }></div>
											<div className="form-notch-middle" style={ { width: '68.8px' } }></div>
											<div className="form-notch-trailing"></div>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-4">
									<div className="form-outline">
										<input type="text" id="form3Example2" className="form-control" />
										<label className="form-label ml-0" for="form3Example2">Last
											name</label>
										<div className="form-notch">
											<div className="form-notch-leading" style={ { width: '9px' } }></div>
											<div className="form-notch-middle" style={ { width: '68px' } }></div>
											<div className="form-notch-trailing"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="form-outline mb-4">
								<input type="email" id="form2Example18" className="form-control form-control-lg" />
								<label className="form-label ml-0" for="form2Example18">Email
									address</label>
								<div className="form-notch">
									<div className="form-notch-leading" style={ { width: '9px' } }></div>
									<div className="form-notch-middle" style={ { width: '88.8px' } }></div>
									<div className="form-notch-trailing"></div>
								</div>
							</div>

							<div className="form-outline mb-4">
								<input type="password" id="form2Example28" className="form-control form-control-lg" />
								<label className="form-label ml-0" for="form2Example28">Password</label>
								<div className="form-notch">
									<div className="form-notch-leading" style={ { width: '9px' } }></div>
									<div className="form-notch-middle" style={ { width: '64.8px' } }></div>
									<div className="form-notch-trailing"></div>
								</div>
							</div>

							<div className="pt-1 mb-4">
								<button className="btn btn-info btn-lg btn-block bg-danger btn-danger" type="button">Sign up</button>
							</div>
							<p className="text-center">You have an account? <a href="/login"
								className="link-info link-danger text-danger">Sign in</a>
							</p>
							<div className="text-center">
								<p>or sign up with:</p>
								<button type="button" className="btn btn-link mx-1">
									<i className="fab fa-facebook-f text-danger"></i>
								</button>

								<button type="button" className="btn btn-link mx-1">
									<i className="fab fa-google text-danger"></i>
								</button>

								<button type="button" className="btn btn-link mx-1">
									<i className="fab fa-twitter text-danger"></i>
								</button>

								<button type="button" className="btn btn-link mx-1">
									<i className="fab fa-github text-danger"></i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register;