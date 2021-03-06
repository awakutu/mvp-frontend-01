import React, { useState } from "react";
import { Button, FormGroup, FormControl, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import login from '../../assets/login.png';
import fb from '../../assets/fb.png';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import API from "../../services/MVP-Api";
import './style.css';
import axios from 'axios';

function Register() {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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

    // axios.post('http://3.15.137.94:8084/api/register', { Username, email, password }, config).then(response => {
    API.postRegister(Username,email,password).then(response => {  
      setLoading(false);
      if (response.data.error_type == "OK") {
        console.log(response.data.error_details);
        setError(response.data.error_details);
        console.log("Gagal Regis");
      }
      console.log(response.data);
      console.log("Berhasil Regis")
      

    }).then(
      
    axios.post('http://3.15.137.94:8084/api/verifikasi', {email}, config).then(response => {  
      setLoading(false);
      console.log(response.data);
      history.push('/Verification');
      console.log("Verifikasi Email Terkirim")      

    }))
    .catch(error => {
      setLoading(false);
      console.log("Gagal Regis")
      // if (error.response.status === 401) setError(error.response.data.message);
      // else setError("Something went wrong. Please try again later.");
    
    });
  }


  return (
        <div className="container mt-5">
          <div className="row align-items-center">
          <div className="col-md-6">
              <Image className="img-fluid my-3" src={login}></Image>
            </div>
            <div className="col-md-6" >
              <div className="Login">
                <h1 className="text-center font-weight-bold">Register</h1>
                <form onSubmit={onSubmit}>
                  <FormGroup controlId="Username">
                    <FormControl
                      autoFocus
                      type="Username"
                      value={Username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup controlId="email">
                    <FormControl
                      autoFocus
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email"
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

                  <div className="text-left text-danger">  
                    <h6> {error} </h6>
                  </div>
                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Register</Button>
                  
                  
                  <div className="text-center">
                    <h5 className="text-center">Already have an account? <a href="/Login"> Login </a></h5>
                    
                    <div className="row">
                        <div className="col"><hr/></div>
                        <div className="col-auto">Or register with</div>
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
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </div>
  );
}

export default Register