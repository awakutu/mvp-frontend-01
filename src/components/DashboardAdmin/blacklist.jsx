import React, { useState, useEffect } from 'react'
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import "./style.css";
import axios from 'axios';
import { getToken } from '../../utils/Common';
import '../../utils/Common';
import Logo from "../../assets/icon.svg";
import headerIMG from "../../assets/profileIMG.jpg";

function Blacklist() {
    // const [token, setToken] = useState(getToken()); 
    // console.log(token);
    // console.log({token});
    const [token, setToken] = useState(getToken());
    const [members, setMembers] = useState([]);
    const [ID, setID] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleLogout = () => {
        removeUserSession();
        history.push('/LoginAdmin');
    }
  
    const config = {
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization : token
        },
      };
      useEffect(() => {
        axios.get("http://3.15.137.94:8084/api/admin/listuserej", config)
        .then(response => setMembers(response.data.data.Data));
      },[members]);
  
      function approve(id) {
        setError(null);
        setLoading(true);
        axios.post('http://3.15.137.94:8084/api/admin/rejectoap', [{ID: id}], config).then(response => {
          console.log(response.data);  
          console.log("Berhasil Approve")
        }).catch(error => {
          setLoading(false);
          console.log("Gagal Login")
          // if (error.response.status === 401) setError(error.response.data.message);
          // else setError("Something went wrong. Please try again later.");
        });
      }
      return (
          <div>
            <header className="container-fluid card">
              <div className="row">
                <span className="mx-4" />
                <img src={Logo} alt="Logo" />
              </div>
            </header>
  
            <div className="container-fluid">
              <div className="row">
                <nav className="col-md-3 d-none d-md-block sidebar">
                  <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                        <i className="fa fa-dashboard pt-4" aria-hidden="true"></i>
                        {" "}Dashboard <span className="sr-only">(current)</span>
                        </a>
                      </li>
  
                      <li className="nav-item">
                        <a className="nav-link" href="/DashboardAdmin">
                        <i className="fa fa-group pt-4" aria-hidden="true"></i>
                        {" "}Approval Management
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
                        {" "}Sign Out
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </nav>
  
                <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="text-primary font-weight-bold">Admin Dashboard</h1>   
                  </div>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                    <h3 className="text-secondary font-weight-bold">Blacklist Users</h3>     
                    
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead className="bg-primary my-3">
                        <tr className="text-light" >
                          <th>ID</th>
                          <th>Nama</th>
                          <th>Email</th>
                          <th>Status</th>
                          {/* <th className="text-center">Status</th> */}
                          <th className="text-center">Opsi</th>
                        </tr>
                      </thead>
                      <tbody>
                      {members.map((member)=>
                        <tr key={member.ID}>
                          <td>{member.ID}</td>
                          <td>{member.Username}</td>
                          <td>{member.email}</td>
                          <td>{member.status}</td>
                          {/* <td className="text-center">
                          <button type="button"  className={((member.Status) == true )? "btn btn-primary rounded-pill text-center" : "btn btn-danger rounded-pill text-center"} data-toggle="button" aria-pressed="false" autocomplete="off">
                          {((member.Status) == true )? "Approved" : "Rejected"}
                          </button>
                          </td> */}
                          <td className="text-center">
                          <button type="button"  onClick={() => approve(member.ID)} className="btn btn-primary rounded-pill text-center btn-sm font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Approve
                          </button>
                          </td>
                        </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </main>
              </div>
            </div>
          </div>
      )
  }
  
  export default Blacklist
  