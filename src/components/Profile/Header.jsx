import headerIMG from "../../assets/profileIMG.jpg";
import { useState, useEffect } from "react";
import { getToken, getID, getUsername } from "../../utils/Common";
import Axios from "axios";

const Header = () => {
  const [token, setToken] = useState(getToken());
  const [Username, setUsername] = useState(getUsername());
  const [Id, setId] = useState(getID());
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*",
      Authorization: token,
    },
  };

  useEffect(() => {
    Axios.get(`http://3.15.137.94:8084/api/profile/${Username}`, config) 
    .then((response) => {
        setUsername(response.data.data.Data.Username);
        setEmail(response.data.data.Data.email);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });
  }, []);

  return (
    <header className="container-fluid py-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2">
              <img className="img-header" src={headerIMG} />
            </div>
            <div className="col-sm-10 no-padding">
              <a href="/Dashboard">
                <p className="btn btn-close float-right ">X</p>
              </a>
              <h2 className="">{Username}</h2>
              <p>{email}</p>
              <h4>Tags</h4>
              <button type="button" className="btn button-tags">
                Lifestyle
              </button>
              <button type="button" className="btn  button-tags">
                Art
              </button>
              <button type="button" className="btn  button-tags">
                Technology
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
