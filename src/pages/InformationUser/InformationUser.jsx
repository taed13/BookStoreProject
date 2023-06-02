import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookAPI from '../../api/bookAPI';

const InformationUser = () => {
  const [data, setData ] = useState({});
  const getInformation = async (id) => {
    const res = await bookAPI.getInformation(id);
    if(res.status === 200) {
      setData(res.data);
      console.log('success', res);
    }else{
      console.log('error', res);
    }

  }

  useEffect(() => {
    getInformation(2);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Login &amp; Security</h1>
      <div className="card mt-4 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="font-weight-bold">Name:</label>
              <div className="d-flex align-items-center">
                <input type="text" className="form-control mr-2" value={data?.name} readOnly />
                <Link to="/my-account/detail/infor-user/edit-name" className="btn btn-danger">Edit</Link>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="form-group">
              <label className="font-weight-bold">Email:</label>
              <div className="d-flex align-items-center">
                <input type="email" className="form-control mr-2" value={data?.email} readOnly />
                <Link to="/my-account/detail/infor-user/edit-email" className="btn btn-danger">Edit</Link>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="form-group">
              <label className="font-weight-bold">Password:</label>
              <div className="d-flex align-items-center">
                <input type="password" className="form-control mr-2" value={data?.password} readOnly />
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
