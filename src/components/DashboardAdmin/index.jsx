import React, { useState } from 'react'
import { Button, Navbar, FormGroup, FormControl } from "react-bootstrap";
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profileIMG.jpg";
import "./style.css";
import axios from 'axios';
import { getToken } from '../../utils/Common';
import '../../utils/Common';


function DashboardAdmin() {
    // const [token, setToken] = useState(getToken()); 
    // console.log(token);
    // console.log({token});
    const [members, setMembers] = useState([]);
    const [ID, setID] = useState([]);
    const [Username, setUsername] = useState("");
    const [Status, setStatus] = useState();
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
        Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiIn0.-CmeD9djX3ZzMWQ6kmE_W11Cbk1ZmZCSqtl_bgk_GNU"
        },
      };
    axios.get("http://3.15.137.94:8084/api/admin/listuser", config)
    .then(response => setMembers(response.data.data.Data));
    
    function onSubmit(e) {
      e.preventDefault();
      setError(null);
      setLoading(true);
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiIn0.-CmeD9djX3ZzMWQ6kmE_W11Cbk1ZmZCSqtl_bgk_GNU"
          },
        };
        console.log(Username)
        // console.log(Boolean({Status}))
      axios.post('http://3.15.137.94:8084/api/admin/updateuser', {Username, Status}, config).then(response => {
        console.log(response.data);
        history.push('/DashboardAdmin');  
        console.log("Berhasil Update")
      }).catch(error => {
        setLoading(false);
        console.log("Gagal Login")
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      
      });
    }
    return (
        <div>
          {/* <Form onSubmit={submitRekKoranHandler} className="mt-3">
          <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit" onSubmit={submitRekKoranHandler}/>
          </Form> */}
        <Navbar className="navbar shadow">
            <img src={logo} className="navbar-brand col-sm-3 col-md-2 mr-0" href="#"/>
            <input className="form-control form-control-dark w-50 my-3 mx-3" type="text" placeholder="Search" aria-label="Search"/>
            <Button className="btn btn-md btn-color font-weight-bold my-3" type="submit">Buat Grup</Button>
            <img src={profile} className="img float-right img-responsive rounded-circle float-right mx-auto" width="50" height="50" href="#"/>
        </Navbar>
           <a type="button" onClick={handleLogout} value="Logout" />

           <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    {" "}Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              
             
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  {" "}Members
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  {" "}Groups
                </a>
              </li>
              
              
            </ul>

            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Pengaturan</span>
              
            </h6> */}
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  {" "}Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  {" "}Sign Out
                </a>
              </li>
              
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="text-primary font-weight-bold">Admin Dashboard</h1>
            
          </div>

          
          
          
                  {/* <form onSubmit={onSubmit}>
                  
                  <FormGroup controlId="Username">
                    <FormControl
                      value={Username}
                      onChange={e => setUsername(e.target.value)}
                      type="Username"
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup controlId="Status">
                    <FormControl
                      value={Status}
                      onChange={e => setStatus(e.target.value)}
                      type="Status"
                      placeholder="Status"
                    />
                  </FormGroup>

                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Approve</Button>
                  
                </form> */}
                  

          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="bg-primary my-3">
                <tr >
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Nomor HP</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
              {members.map((member)=>
                <tr>
                  <td>{member.ID}</td>
                  <td>{member.Username}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  
                  <td className="text-center">
                  <button type="button"  className={((member.Status) == true )? "btn btn-primary rounded-pill text-center" : "btn btn-danger rounded-pill text-center"} data-toggle="button" aria-pressed="false" autocomplete="off">
                  {((member.Status) == true )? "Approved" : "Rejected"}
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

export default DashboardAdmin
