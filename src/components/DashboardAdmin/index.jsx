import React, { useState, useEffect } from 'react'
import "./style.css";
import axios from 'axios';
import { getToken } from '../../utils/Common';
import '../../utils/Common';
import Logo from "../../assets/icon.svg";
import "./style.css";
import Sidebar from "./sidebar";

function DashboardAdmin() {
    const [token, setToken] = useState(getToken());
    const [totregister, setTotregister] = useState("");
    const [totreject, setTotreject] = useState("");
  
    const config = {
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization : token
        },
      };
      useEffect(() => {
        axios.get("http://3.15.137.94:8084/api/admin/listuser", config)
        .then(response => setTotregister(response.data.data.Data.length));
      },[]);
      useEffect(() => {
        axios.get("http://3.15.137.94:8084/api/admin/listuserej", config)
        .then(response => setTotreject(response.data.data.Data.length));
      },[]);
  
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
                <Sidebar/>
  
                <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="text-primary font-weight-bold">Admin Dashboard</h1>  
                  </div>
                  <div className="row">
                    
                    <div className="col-sm-6">
                      <div className="card bg-primary">
                        <div className="card-body nopadding text-light">
                          <h1 className="card-title font-weight-bold text-center my-3">Approval Users</h1>
                          <div className="d-flex justify-content-around">
                            <div>
                              <h1 className="card-text text-center font-weight-bold display-4">{totregister}</h1>
                              <p className="card-text text-center font-weight-bold">Registered Users</p>
                            </div>
                            <div>
                              <i className="fa fa-group text-center display-1"></i>
                            </div>
                          </div>
                          <div className="card-footer text-center">
                            <a href="/DashboardAdminApproval" className="text-light">More info <i className="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card bg-danger">
                        <div className="card-body nopadding text-light">
                          <h1 className="card-title font-weight-bold text-center my-3">Blacklist Users</h1>
                          <div className="d-flex justify-content-around">
                            <div>
                              <h1 className="card-text text-center font-weight-bold display-4">{totreject}</h1>
                              <p className="card-text text-center font-weight-bold">Rejected Users</p>
                            </div>
                            <div>
                              <i className="fa fa-ban text-center display-1"></i>
                            </div>
                          </div>
                          <div className="card-footer text-center">
                            <a href="/DashboardAdminBlacklist" className="text-light">More info <i className="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </main>
              </div>
            </div>
          </div>
      )
  }
  
  export default DashboardAdmin