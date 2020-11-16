import { Switch, Redirect , BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Verification from "./components/Verification";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/Register" />
        <PublicRoute path="/Register" component={Register} />{" "}
        <PublicRoute path="/Login" component={Login} />{" "}
        <PrivateRoute path="/Verification" component={Verification} />{" "}
        <PrivateRoute path="/Dashboard" component={Dashboard} />{" "}
        <PrivateRoute path="/Profile" component={Profile} />{" "}
      </Switch>
    </Router>
  );
}