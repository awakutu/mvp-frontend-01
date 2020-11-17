import headerIMG from "../../assets/profileIMG.jpg";
import { useState, useEffect } from "react";
const Header = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   retrieveHeader();
  // }, []);

  // const retrieveHeader = () => {
  //   ApiService.getUser(Username,email)
  //     .then(response => {
  //       // setUsername(response.username);
  //       console.log(response.username);
  //       console.log(response.email);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setData({ ...data, [name]: value });
  // };

  // const update = () => {
  //   ApiService.postRegister(data)
  //     .then((response) => {
  //       const newUser = [...list, response.data];
  //       setList(newUser);
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

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
              <h2 className="">Jiang Xu Lei</h2>
              <p>jianxu@gmail.com</p>
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
