import { Switch, Redirect , BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import Verification from "./components/Verification";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import DashboardAdmin from "./components/DashboardAdmin";
import PrefCategory from "./components/PrefCategory";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/Register" />
        <PublicRoute path="/Register" component={Register} />{" "}
        <PublicRoute path="/Login" component={Login} />{" "}
        <PublicRoute path="/LoginAdmin" component={LoginAdmin} />{" "}
        <PrivateRoute path="/Verification" component={Verification} />{" "}
        <PrivateRoute path="/Dashboard" component={Dashboard} />{" "}
        <PrivateRoute path="/DashboardAdmin" component={DashboardAdmin} />{" "}
        <PrivateRoute path="/Profile" component={Profile} />{" "}
        <PrivateRoute path="/PrefCategory" component={PrefCategory} />{" "}
        
      </Switch>
    </Router>
  );
}