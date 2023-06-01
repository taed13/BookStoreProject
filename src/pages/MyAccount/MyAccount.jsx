import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const MyAccount = () => {
  return (
    <div id="main" className="container p-0 mt-2">
      <div className='mb-5'>Tài khoản của tôi</div>
      <div className="row m-0">
        <div className="col-sm-3">
          <h4>Thanh toán của tôi</h4>
          <div className="list-group">
            <Link to="/my-account/detail/my-purchases" className="list-group-item ">
              Xem thanh toán của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>

            <Link to="/basket/detail" className="list-group-item ">
              Xem giỏ hàng của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            {/* Create a link here (only on ZVAB PL or .COM if linked) to ZvabHistoricOrderTrack */}
          </div>

          <h4 className='mt-1'>Emails của tôi</h4>
          <div className="list-group">
            <Link to="/email-list/detail" className="list-group-item ">
              Xem emails của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
          </div>
        </div>

        <div className="col-sm-3">
          <h4>Thông tin cá nhân của tôi</h4>
          <div className="list-group">
            <Link to="/my-account/detail/infor-user" className="list-group-item ">
              Tên, email và mật khẩu
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              Thông tin tài khoản của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="/my-account/detail/my-address" className="list-group-item ">
              Địa chỉ của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              Quản lý thẻ ngân hàng của tôi
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
          </div>
        </div>

        <div className="col-sm-3">
          <h4>Tôi muốn</h4>
          <div className="list-group">
            <Link to="" className="list-group-item ">
              List and Maintain My Wants
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              My Recently Matched Wants
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              Learn More About Wants
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item">
              Download My Wants Report
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
          </div>
        </div>

        <div className="col-sm-3">
          <h4>Help</h4>
          <div className="list-group">
            <Link to="" className="list-group-item ">
              AbeBooks Help
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              Contact Customer Support
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
            <Link to="" className="list-group-item ">
              Community Forums
              <span className="float-right">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
