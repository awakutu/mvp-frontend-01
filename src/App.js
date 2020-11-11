//import Registrasi from 'pages/registrasi'; contoh import dari laman regis
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registrasi} /> {/*Ganti component halaman regis*/}
        <Route path="/Verifikasi" component={Registrasi} /> {/*Ganti component halaman verifikasi*/}
        <Route path="/Login" component={Registrasi} /> {/*Ganti component halaman login*/}
        <Route path="/Dashboard" component={Registrasi} /> {/*Ganti component halaman dashboard*/}
        <Route path="/Profile" component={Registrasi} /> {/*Ganti component halaman profil*/}
      </Switch>
    </Router>
  );
}

//Ini nanti dihapus apabila page sudah ada isinya
const Registrasi = () => {
  return <h1>Halaman pertama muncul registrasi</h1>;
};
