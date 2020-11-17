import React, { useState } from "react";
import { Button, FormGroup, FormControl, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import login from '../../assets/login.png';
import fb from '../../assets/fb.png';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import { setUserSession } from '../../utils/Common';
import API from "../../services/MVP-Api";
import "./style.css";
import axios from 'axios';

function LoginAdmin() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    // hit api, bisa pakai kode dibawah
    // axios.post('http://3.15.137.94:8084/api/login', { name, password }, config).then(response => {
    // atau
    
    axios.post('http://3.15.137.94:8084/api/admin/login', { Username, password }, config).then(response => {
      setUserSession(response.data.token);
      history.push('/DashboardAdmin');  
      console.log("Berhasil Login")
    }).catch(error => {
      setLoading(false);
      console.log("Gagal Login")
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    
    });
  }

  // function onSubmit(e) {
  //   e.preventDefault();
  //   setError(null);
  //   setLoading(true);
  //   const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //   if (Username == "admin") {
  //     axios.post('http://13.250.19.185:8084/api/admin/login', { Username, password }, config).then(response => {
  //       setUserSession(response.data.token);
  //       history.push('/Admin');  
  //     }).catch(error => {
  //       setLoading(false);
  //       console.log("Gagal Login")
  //       if (error.response.status === 401) setError(error.response.data.message);
  //       else setError("Something went wrong. Please try again later.");
      
  //     });
  //   } 
  //   else {
  //   API.postLogin(Username,password).then(response => {
  //     setLoading(false);
  //     setUserSession(response.data.token);

  //     history.push('/Dashboard');   
  //     console.log("Berhasil Login")
  //   }).catch(error => {
  //     setLoading(false);
  //     console.log("Gagal Login")
  //     if (error.response.status === 401) setError(error.response.data.message);
  //     else setError("Something went wrong. Please try again later.");
    
  //   });  
  //   }
  // }

  return (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image className="img-fluid my-3" src={login}></Image>
            </div>
            <div className="col-md-6 " >
              <div className="Login">
                <h1 className="text-center font-weight-bold">Login Admin</h1>
                <form onSubmit={onSubmit}>
                  <FormGroup controlId="username">
                    <FormControl
                      autoFocus
                      type="username"
                      value={Username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup controlId="password">
                    <FormControl
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </FormGroup>

                  {/* <div className="text-right">  
                    <a href="/register"> Lupa Password? </a>
                  </div> */}
                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Login</Button>
                  
                  
                  {/* <div className="text-center">
                    <h5 className="text-center">Belum memiliki akun? <a href="/Register"> Buat akun </a></h5>
                    
                    <div className="row">
                        <div className="col"><hr/></div>
                        <div className="col-auto">Atau login dengan</div>
                        <div className="col"><hr/></div>
                    </div>
                    <a href="/register">
                        <Image className="img-fluid mx-2" src={fb}></Image>
                    </a>
                    <a href="/register">
                        <Image className="img-fluid mx-2" src={google}></Image>
                    </a>
                    <a href="/register">
                        <Image className="img-fluid mx-2" src={twitter}></Image>
                    </a>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
  );
}

export default LoginAdmin