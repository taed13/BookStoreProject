import React from 'react';
import { Link } from 'react-router-dom';
import './ViewMyPurchases.css';

const ViewMyPurchases = () => {
  return (
    <div className="container-xl px-0">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2>Danh Sách <b>Hoá Đơn</b></h2>
              </div>
              <div className="col-sm-8">						
                <Link to="#" className="btn btn-primary"><i className="fas fa-sync-alt"></i> <span>Refresh List</span></Link>
                <Link to="#" className="btn btn-secondary"><i className="fas fa-file-excel"></i> <span>Export to Excel</span></Link>
              </div>
            </div>
          </div>
          <div className="table-filter">
            <div className="row">
              <div className="col-sm-3">
                <div className="show-entries">
                  <span>Show</span>
                  <select className="form-control">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                  <span>entries</span>
                </div>
              </div>
              <div className="col-sm-9">
                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                <div className="filter-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="filter-group">
                  <label>Location</label>
                  <select className="form-control">
                    <option>All</option>
                    <option>Berlin</option>
                    <option>London</option>
                    <option>Madrid</option>
                    <option>New York</option>
                    <option>Paris</option>								
                  </select>
                </div>
                <div className="filter-group">
                  <label>Status</label>
                  <select className="form-control">
                    <option>Any</option>
                    <option>Delivered</option>
                    <option>Shipped</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <span className="filter-icon"><i className="fa fa-filter"></i></span>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Order Date</th>						
                <th>Status</th>						
                <th>Net Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><Link to="#"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar" /> Michael Holz</Link></td>
                <td>London</td>
                <td>Jun 15, 2017</td>                        
                <td><span className="status text-success">•</span> Delivered</td>
                <td>$254</td>
                <td><Link to="/my-account/detail/my-purchases/detail-my-purchase" className="view" title="" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td><Link to="#"><img src="/examples/images/avatar/2.jpg" className="avatar" alt="Avatar" /> Paula Wilson</Link></td>
                <td>Madrid</td>
                <td>Jul 1, 2017</td>                        
                <td><span className="status text-success">•</span> Delivered</td>
                <td>$350</td>
                <td><Link to="/my-account/detail/my-purchases/detail-my-purchase" className="view" title="" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></Link></td>
              </tr>
              {/* Add more table rows as needed */}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <ul className="pagination">
              <li className="page-item disabled"><Link to="#">Previous</Link></li>
              <li className="page-item"><Link to="#" className="page-link">1</Link></li>
              <li className="page-item"><Link to="#" className="page-link">2</Link></li>
              <li className="page-item active"><Link to="#" className="page-link">3</Link></li>
              <li className="page-item"><Link to="#" className="page-link">4</Link></li>
              <li className="page-item"><Link to="#" className="page-link">5</Link></li>
              <li className="page-item"><Link to="#" className="page-link">Next</Link></li>
            </ul>
          </div>
        </div>
      </div>        
    </div>
  );
};

export default ViewMyPurchases;
