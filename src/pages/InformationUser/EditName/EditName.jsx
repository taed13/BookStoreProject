import React from 'react';

const EditName = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Change your name</h1>
      <div className="card mt-4 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <div className="mb-4">
            <p>
              If you want to change the name associated with your AbeBooks customer account, you may do so below. Be sure to click the <b>Save Changes</b> button when you are done.
            </p>
          </div>
          <form action="https://auth.www.abebooks.com/ap/cnep" method="post" noValidate>
            <div className="form-group">
              <label htmlFor="ap_customer_name">New name</label>
              <input type="text" id="ap_customer_name" name="customerName" className="form-control" value="" tabIndex="1" />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
