import React, { useState } from 'react'
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import "./style.css";
import axios from 'axios';
import { getToken } from '../../utils/Common';
import '../../utils/Common';
import Logo from "../../assets/icon.svg";
import headerIMG from "../../assets/profileIMG.jpg";
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
        Authorization : token
        },
      };
    axios.get("http://3.15.137.94:8084/api/admin/listuser", config)
    .then(response => setMembers(response.data.data.Data));
    
    function singleApprove(id) {
      setError(null);
      setLoading(true);
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization : token
          },
        };
      axios.post('http://3.15.137.94:8084/api/admin/updateuser', [{ID: id}], config).then(response => {
        console.log(response.data);
        history.push('/DashboardAdmin');  
        console.log("Berhasil Approve")
      }).catch(error => {
        setLoading(false);
        console.log("Gagal Login")
        // if (error.response.status === 401) setError(error.response.data.message);
        // else setError("Something went wrong. Please try again later.");
      
      });
    }


  function multiApprove(event) {
      const target = event.target;
      var value = target.value;
      
      if(target.checked){
          check.push(+value); 
      }else{
          check.pop(+value);
      }
      
  }

  function submitMultiApprove(){
      var lengCheckArr = check.length;
      for (let i=0; i<lengCheckArr; i++) {
        arr[i] = {ID: check[i]};
      }
      console.log(arr);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization : token
        },
      };
      axios.post('http://3.15.137.94:8084/api/admin/updateuser', arr, config).then(response => {
        console.log(response.data);
        history.push('/DashboardAdmin');  
        console.log("Berhasil Approve")
      }).catch(error => {
        setLoading(false);
        console.log("Gagal Login")
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      
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
            <h3 className="text-secondary font-weight-bold">Approval Management</h3>     
            
          </div>
          <div class="form-row">
              
          </div>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="bg-primary my-3">
                <tr className="text-light"  >
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Nomor HP</th>
                  {/* <th className="text-center">Status</th> */}
                  <th className="text-center">Single</th>
                  <th className="text-center">Multi</th>
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
                    <button type="button" onClick={() => submitMultiApprove()} className="btn btn-sm btn-success rounded-pill text-center mx-2 font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                      Approve
                    </button>
                  </td>
                </tr>
              {members.map((member)=>
                <tr>
                  <td>{member.ID}</td>
                  <td>{member.Username}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  {/* <td className="text-center">
                  <button type="button"  className={((member.Status) == true )? "btn btn-primary rounded-pill text-center" : "btn btn-danger rounded-pill text-center"} data-toggle="button" aria-pressed="false" autocomplete="off">
                  {((member.Status) == true )? "Approved" : "Rejected"}
                  </button>
                  </td> */}
                  <td className="text-center">
                  <button type="button"  onClick={() => singleApprove(member.ID)} className="btn btn-sm btn-primary rounded-pill text-center mx-2 font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Approve
                  </button>
                  <button type="button"  className="btn btn-sm btn-danger rounded-pill text-center font-weight-bold" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Reject
                  </button>
                  </td>
                  <td className="text-center">
                  <form>
                      <input
                        name="multiapprove"
                        value={member.ID}
                        type="checkbox"
                        onChange={multiApprove} />
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
