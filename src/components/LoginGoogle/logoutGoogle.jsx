import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '913465578188-hai5duusvj9f2h6fv8do8hp79tkpqi5q.apps.googleusercontent.com';

function LogoutGoogle() {
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

  return (
    <button onClick={signOut} className="button">
      
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutGoogle;
