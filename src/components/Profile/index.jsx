import { useState, useEffect } from "react";
import ApiService from "../../services/MVP-Api";
import headerIMG from "../../assets/profileIMG.jpg";
import iconIMG from "../../assets/profileIcon.svg";
import "./style.css";

export default function Profile() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const saveData = () => {
    ApiService.postRegister(data)
      .then((response) => {
        const newUser = [...list, response.data];
        setList(newUser);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <header className="jumbotron">
        <img
          className="img-header position-absolute"
          src={headerIMG}
          alt="gambar orang"
        ></img>
        <h2 className="name-header">Emily Doe</h2>
        <p className="bio-header">Vegan Lover</p>
      </header>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-md-6  pr-3">
            <h4>Tags [ ]</h4>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-info button-tags">
                Fruit
              </button>
              <button type="button" className="btn btn-info button-tags">
                Yoga
              </button>
              <button type="button" className="btn btn-info button-tags">
                Classic
              </button>
            </div>
            <img
              className="img-fluid pt-2"
              src={iconIMG}
              alt="gambar orang"
            ></img>
          </div>
          <div className="col-md-6 py-5">
            <form>
              <div className="form-group row">
                <label htmlFor="inputNama" className="col-sm-5 col-form-label">
                  Nama
                </label>
                <div className="col-sm-7">
                  <input
                    onChange={handleInputChange}
                    value={data.username}
                    type="text"
                    className="form-control input-profile"
                    id="username"
                    name="username"
                    placeholder="Masukkan nama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputNoHP" className="col-sm-5 col-form-label">
                  No Hp.
                </label>
                <div className="col-sm-7">
                  <input
                    //  onChange={(e)=>handle(e)}
                    type="text"
                    className="form-control input-profile"
                    id="noHP"
                    name=""
                    placeholder="Masukkan No Hp."
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputTTL" className="col-sm-5 col-form-label">
                  Tempat, Tanggal Lahir
                </label>
                <div className="col-sm-7">
                  <input
                    //  onChange={(e)=>handle(e)}
                    type="text"
                    className="form-control input-profile"
                    id="TTL"
                    name=""
                    placeholder="Masukkan Tempat, Tanggal Lahir."
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputEmailLama"
                  className="col-sm-5 col-form-label"
                >
                  Email Lama
                </label>
                <div className="col-sm-7">
                  <input
                    //  onChange={(e)=>handle(e)}
                    type="text"
                    className="form-control input-profile"
                    id="emailLama"
                    name=""
                    placeholder="Masukkan Email Lama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputEmailBaru"
                  className="col-sm-5 col-form-label"
                >
                  Email Baru
                </label>
                <div className="col-sm-7">
                  <input
                    onChange={handleInputChange}
                    value={data.email}
                    type="text"
                    className="form-control input-profile"
                    id="email"
                    name="email"
                    placeholder="Masukkan Email Baru"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputSandiLama"
                  className="col-sm-5 col-form-label"
                >
                  Sandi Lama
                </label>
                <div className="col-sm-7">
                  <input
                    //  onChange={(e)=>handle(e)}
                    type="password"
                    className="form-control input-profile"
                    id="sandiLama"
                    name=""
                    placeholder="Masukkan Sandi Lama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputSandiBaru"
                  className="col-sm-5 col-form-label"
                >
                  Sandi Baru
                </label>
                <div className="col-sm-7">
                  <input
                    onChange={handleInputChange}
                    value={data.password}
                    type="password"
                    name="password"
                    className="form-control input-profile"
                    id="password"
                    name="password"
                    placeholder="Masukkan Sandi Baru"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputKonfirmasi"
                  className="col-sm-5 col-form-label"
                >
                  Konfirmasi Sandi Baru
                </label>
                <div className="col-sm-7">
                  <input
                    type="password"
                    className="form-control input-profile"
                    id="konfirmasiSandi"
                    name=""
                    placeholder="Masukkan Kembali Sandi Baru"
                  />
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-end ">
              <button
                onClick={saveData}
                className="btn btn-info button-tags d-md-table"
              >
                Perbarui
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

