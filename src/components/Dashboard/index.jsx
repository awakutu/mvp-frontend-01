import React from 'react'
import { removeUserSession } from '../../utils/Common';
import { useHistory } from "react-router-dom";
import "./style.css";

function Dashboard() {
    const history = useHistory();
    const handleLogout = () => {
        removeUserSession();
        history.push('/Login');
    }
    return (
        <div>
           <input type="button" onClick={handleLogout} value="Logout" /> 
        </div>
    )
}

export default Dashboard
