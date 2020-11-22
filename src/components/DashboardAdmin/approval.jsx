import React, { useState, useEffect } from 'react'
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import "./style.css";
import axios from 'axios';
import { getToken } from '../../utils/Common';
import '../../utils/Common';
import Logo from "../../assets/icon.svg";
import Sidebar from "./sidebar";
import "./style.css";

function DashboardAdmin() {
    const [token, setToken] = useState(getToken());
    const [members, setMembers] = useState([]);
    const [ID, setID] = useState('');
    const [check, setCheck] = useState([]);
    const [arr, setArr] = useState([]);
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
        axios.get("http://3.15.137.94:8084/api/admin/listuser", config)
        .then(response => setMembers(response.data.data.Data));
      },[members]);
  
      function singleApprove(id) {
        setError(null);
        setLoading(true);
        axios.post('http://3.15.137.94:8084/api/admin/updateuser', [{ID: id}], config).then(response => {
          console.log(response.data);
          console.log("Berhasil")
        }).catch(error => {
          setLoading(false);
          console.log("Gagal")
          // if (error.response.status === 401) setError(error.response.data.message);
          // else setError("Something went wrong. Please try again later.");
        });
      }
  
      function singleReject(id,username,email) {
        setError(null);
        setLoading(true);
        axios.post('http://3.15.137.94:8084/api/admin/reject', [{ID: id, username: username, email: email}], config).then(response => {
          console.log(response.data); 
          console.log("Berhasil")
        }).catch(error => {
          setLoading(false);
          console.log("Gagal")
          // if (error.response.status === 401) setError(error.response.data.message);
          // else setError("Something went wrong. Please try again later.");
        });
      }
  
      function multiSelect(event) {
          const target = event.target;
          var value = target.value;
          if(target.checked){
              check.push(+value); 
          }else{
              check.pop(+value);
          }
          console.log(check);
          console.log(check.length);
      }
  
      function submitMultiApprove(){
          var lengCheckArr = check.length;
          for (let i=0; i<lengCheckArr; i++) {
            arr[i] = {ID: check[i]};
          }
          console.log(arr);
          axios.post('http://3.15.137.94:8084/api/admin/updateuser', arr, config).then(response => {
            console.log(response.data); 
            console.log("Berhasil")
          }).catch(error => {
            setLoading(false);
            console.log("Gagal")
          });
      }
  
      //Hanya bisa get IDnya saja
      function submitMultiReject(){
          var lengCheckArr = check.length;
          for (let i=0; i<lengCheckArr; i++) {
            arr[i] = {ID: check[i]};
          }
          console.log(arr);
          axios.post('http://3.15.137.94:8084/api/admin/reject', arr, config).then(response => {
            console.log(response.data); 
            console.log("Berhasil")
          }).catch(error => {
            setLoading(false);
            console.log("Gagal")
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
                <Sidebar/>
  
                <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="text-primary font-weight-bold">Approval Management</h1>  
                  </div>
                  {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                    <h3 className="text-secondary font-weight-bold">Approval Management</h3>     
                  </div> */}
                  <div className="form-row">
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead className="bg-primary my-3">
                        <tr className="text-light"  >
                          <th>ID</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th className="text-center">Single Option</th>
                          <th className="text-center">Multi Option</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-center">
                            <button type="button" onClick={() => submitMultiApprove()} className={(members.length == 0) ? "btn btn-sm btn-primary rounded-pill text-center mx-2 font-weight-bold invisible" : "btn btn-sm btn-primary rounded-pill text-center mx-2 font-weight-bold visible"} data-toggle="button" aria-pressed="false" autocomplete="off">
                              Approve
                            </button>
                            <button type="button" onClick={() => submitMultiReject()} className={(members.length == 0) ? "btn btn-sm btn-danger rounded-pill text-center font-weight-bold invisible" : "btn btn-sm btn-danger rounded-pill text-center font-weight-bold visible"} data-toggle="button" aria-pressed="false" autocomplete="off">
                              Reject
                            </button>
                          </td>
                        </tr>
                      {members.map((member)=>
                        <tr key={member.ID}>
                          <td>{member.ID}</td>
                          <td>{member.Username}</td>
                          <td>{member.email}</td>
                          <td>{member.status}</td>
                          <td className="text-center">
                          <button type="button"  onClick={() => singleApprove(member.ID)} className="btn btn-sm btn-primary rounded-pill text-center mx-2 font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Approve
                          </button>
                          <button type="button"  onClick={() => singleReject(member.ID,member.Username,member.email)}  className="btn btn-sm btn-danger rounded-pill text-center font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Reject
                          </button>
                          </td>
                          <td className="text-center">
                          <form>
                              <input
                                name="multiSelect"
                                value={member.ID}
                                type="checkbox"
                                onChange={multiSelect} />
                          </form>
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
  
  export default DashboardAdmin