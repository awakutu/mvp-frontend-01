//import Registrasi from 'pages/registrasi'; contoh import dari laman regis
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />{" "}
        {/*Ganti component halaman regis*/}
        <Route path="/Register" component={Register} />{" "}
        {/*Ganti component halaman verifikasi*/}
        <Route path="/Verifikasi" component={Registrasi} />{" "}
        {/*Ganti component halaman verifikasi*/}
        <PublicRoute path="/Login" component={Login} />{" "}
        {/*Ganti component halaman login*/}
        <PrivateRoute path="/Dashboard" component={Dashboard} />{" "}
        {/*Ganti component halaman dashboard*/}
        <Route path="/Profile" component={Registrasi} />{" "}
        {/*Ganti component halaman profil*/}
      </Switch>
    </Router>
  );
}

//Ini nanti dihapus apabila page sudah ada isinya
const Registrasi = () => {
  return <h1>Halaman pertama muncul registrasi</h1>;
};
