// return the token from the session storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}

// remove the token from the session storage to logout
export const removeUserSession = () => {
    localStorage.removeItem('token');
}

// set the token from the session storage to login
  export const setUserSession = (token) => {
    localStorage.setItem('token', token);
}
