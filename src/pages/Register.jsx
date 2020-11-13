import React, { useState } from "react";
import { Button, FormGroup, FormControl, Image } from "react-bootstrap";
import '../components/authStyle.css';
import { useHistory } from "react-router-dom";
import login from '../components/login.png';
import fb from '../components/fb.png';
import google from '../components/google.png';
import twitter from '../components/twitter.png';
import axios from 'axios';


function Register() {
  const [username, setUsername] = useState("");
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
    axios.post('http://3.15.137.94:8084/api/register', { username, email, password }, config).then(response => {
      setLoading(false);
      console.log(response.data);
      history.push('/Login');
      console.log("Berhasil Regis")
      

    }).catch(error => {
      setLoading(false);
      console.log("Gagal Regis")
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    
    });
  }


  return (
        <div className="container-fluid">
          <div className="row align-items-center">
          <div className="col-md-6 bg-color">
              <Image className="img-fluid" src={login}></Image>
            </div>
            <div className="col-md-6" >
              <div className="Login">
                <h1 className="text-center font-weight-bold">Registrasi</h1>
                <form onSubmit={onSubmit}>
                  <FormGroup controlId="username">
                    <FormControl
                      autoFocus
                      type="username"
                      value={username}
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

                
                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Daftar</Button>
                  
                  
                  <div class="text-center">
                    <h5 className="text-center">Sudah memiliki akun? <a href="/Login"> Login </a></h5>
                    
                    <div class="row">
                        <div class="col"><hr/></div>
                        <div class="col-auto">Atau daftar dengan</div>
                        <div class="col"><hr/></div>
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