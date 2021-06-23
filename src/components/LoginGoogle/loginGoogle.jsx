import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import axios from "axios";
import { useHistory } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  '913465578188-hai5duusvj9f2h6fv8do8hp79tkpqi5q.apps.googleusercontent.com';
function LoginGoogle() {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    console.log('Login Success: token:', res); 
    // axios.post('http://3.15.137.94:8084/api/login', res.profileObj.email);
    console.log("Success");
    refreshTokenSetup(res);
    // history.push('/PrefCategory');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={() => signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginGoogle;
