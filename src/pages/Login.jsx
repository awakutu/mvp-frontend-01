import React, { useState } from "react";
import { Button, FormGroup, FormControl, Image } from "react-bootstrap";
import '../components/authStyle.css';
import { useHistory } from "react-router-dom";
import login from '../components/login.png';
import fb from '../components/fb.png';
import google from '../components/google.png';
import twitter from '../components/twitter.png';
import { setUserSession } from '../utils/Common';
import API from "../services/MVP-Api";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    // hit api, bisa pakai kode dibawah
    // axios.post('http://3.15.137.94:8084/api/login', { name, password }, config).then(response => {
    // atau 
    API.postLogin(name,password).then(response => {
      setLoading(false);
      setUserSession(response.data.token);
      
      history.push('/Dashboard');
      console.log("Berhasil Login")
      

    }).catch(error => {
      setLoading(false);
      console.log("Gagal Login")
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    
    });
  }

  return (
        <div className="container-fluid">
          <div className="row align-items-center">
            
            <div className="col-md-6" >
              <div className="Login">
                <h1 className="text-center font-weight-bold">Login</h1>
                <form onSubmit={onSubmit}>
                  <FormGroup controlId="name">
                    <FormControl
                      autoFocus
                      type="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
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

                  <div className="text-right">  
                    <a href="/register"> Lupa Password? </a>
                  </div>
                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Login</Button>
                  
                  
                  <div className="text-center">
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
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 bg-color">
              <Image className="img-fluid" src={login}></Image>
            </div>
          </div>
        </div>
  );
}

export default Login