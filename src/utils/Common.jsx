// return the token from the session storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}
// return the ID from the session storage
export const getID = () => {
    return localStorage.getItem('ID') || null;
}
// return the username from the session storage
export const getUsername = () => {
    return localStorage.getItem('username') || null;
}

// remove the token, ID, username from the session storage to logout
export const removeUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('ID');
    localStorage.removeItem('username');
}

// set the token, ID, username from the session storage to login
  export const setUserSession = (token, ID, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('ID', ID);
    localStorage.setItem('username', username);
}
