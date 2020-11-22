import React from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import "./style.css";
import '../../utils/Common';
import "./style.css";

function Sidebar() {
    const history = useHistory();
    const handleLogout = () => {
        removeUserSession();
        history.push('/LoginAdmin');
    }
      return (
        <>          
          <nav className="col-md-3 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/DashboardAdmin">
                  <i className="fa fa-dashboard pt-4" aria-hidden="true"></i>
                  {" "}Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/DashboardAdminApproval">
                  <i className="fa fa-group pt-4" aria-hidden="true"></i>
                  {" "}Approval Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/DashboardAdminBlacklist">
                  <i className="fa fa-ban pt-4" aria-hidden="true"></i>
                  {" "}Blacklist Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>
                  <i className="fa fa-sign-out pt-4" aria-hidden="true"></i>
                  {" "}Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )
  }
  
  export default Sidebar