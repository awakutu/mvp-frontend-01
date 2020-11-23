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
import LoginGoogle from "../LoginGoogle/loginGoogle"
import LogoutGoogle from "../LoginGoogle/logoutGoogle"
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import axios from "axios";

function Login() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //Login Google
  const clientId =
  '913465578188-hai5duusvj9f2h6fv8do8hp79tkpqi5q.apps.googleusercontent.com';

  const Success = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    console.log('Login Success: token:', res); 
    // axios.post('http://3.15.137.94:8084/api/login', res.profileObj.email);
    console.log("Success");
    console.log(res);
    refreshTokenSetup(res);
    // history.push('/PrefCategory');
  };

  const Failure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
      Success,
      Failure,
      clientId,
      isSignedIn: true,
      accessType: 'offline',
      // responseType: 'code',
      // prompt: 'consent',
  });

  //Logout google
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

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
     
    API.postLogin(Username,password).then(response => {
      setLoading(false);
      if (response.data.error_type == "OK") {
        console.log(response.data.error_details);
        setError(response.data.error_details);
        console.log("Gagal Login");
      }
      
      else {
        const token = response.data.data.token;
        const ID = response.data.data.ID;
        const username = response.data.data.username;
        setUserSession(token,ID,username);
        history.push('/PrefCategory');
        console.log("Berhasil Login");
      }
    })
    .catch(error => {
      if (error.response.data.error_type == "Bad Request") {
        console.log(error.response.data.error_details);
        setError(error.response.data.error_details);
        console.log("Gagal Login");
      }
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
                <h1 className="text-center font-weight-bold">Login</h1>
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

                  <div className="text-left text-danger">  
                    <h6> {error} </h6>
                  </div>
                  
                <Button className="btn btn-lg btn-color btn-block font-weight-bold my-3" type="submit">Login</Button>
                </form>
                  
                  <div className="text-center">
                    <h5 className="text-center">Dont't have an account?<a href="/Register"> Register</a></h5>
                    
                    <div className="row">
                        <div className="col"><hr/></div>
                        <div className="col-auto">Or login with</div>
                        <div className="col"><hr/></div>
                    </div>
                    <a href="/register">
                        <Image className="img-fluid mx-2" src={fb}></Image>
                    </a>
                    {/* <button onClick={()=> signIn}>
                        <Image className="img-fluid mx-2" src={google}></Image>
                    </button> */}
                   
                    <a href="/register">
                        <Image className="img-fluid mx-2" src={twitter}></Image>
                    </a>
                    <LoginGoogle/>
                    <LogoutGoogle/>
                    {/* <button onClick={() => signOut}>
                      

                      <span className="buttonText">Sign out</span>
                    </button> */}
                  </div>
                
              </div>
            </div>
          </div>
        </div>
  );
}

export default Login