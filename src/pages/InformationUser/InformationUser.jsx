import React from 'react';
import { Link } from 'react-router-dom';


const InformationUser = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Login &amp; Security</h1>
      <div className="card mt-4 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
           <form>
            <div className="form-group">
              <label className="font-weight-bold">Name:</label>
              <div className="d-flex align-items-center">
                <input type="text" className="form-control mr-2" value="datamin" readOnly />
                <Link to="/my-account/detail/infor-user/edit-name" className="btn btn-danger">Edit</Link>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="form-group">
              <label className="font-weight-bold">Email:</label>
              <div className="d-flex align-items-center">
                <input type="email" className="form-control mr-2" value="tiendatpot@gmail.com" readOnly />
                <Link to="/my-account/detail/infor-user/edit-email" className="btn btn-danger">Edit</Link>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="form-group">
              <label className="font-weight-bold">Password:</label>
              <div className="d-flex align-items-center">
                <input type="password" className="form-control mr-2" value="********" readOnly />
                <Link to="/my-account/detail/infor-user/edit-password" className="btn btn-danger">Edit</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/my-account/detail" className="btn btn-danger">Done</Link>
      </div>
    </div>
  );
};

export default InformationUser;
