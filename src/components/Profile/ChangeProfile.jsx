import { useState, useEffect, createRef } from "react";
import { getToken, getID, getUsername } from "../../utils/Common";
import Axios from "axios";

export const ChangeProfile = () => {
  const [mode, setMode] = useState("view");
  const [token, setToken] = useState(getToken());
  const [Username, setUsername] = useState(getUsername());
  const [Id, setId] = useState(getID());
  const [name, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [emailBaru, setEmailBaru] = useState("");
  const [emailKonfirmasi, setEmailKonfirmasi] = useState("");
  const [password, setPassword] = useState("");
  const [Sandibaru, setSandiBaru] = useState("");
  const [SandiKonfirmasi, setSandiKonfirmasi] = useState("");
  const [phone, setPhone] = useState("");
  const [ttl, setTTL] = useState("");
  const bcrypt = require('bcryptjs');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  };

  useEffect(() => {
    Axios.get(`http://3.15.137.94:8084/api/profile/${Username}`, config)
      .then((response) => {
        setNama(response.data.data.Data.name);
        setEmail(response.data.data.Data.email);
        setPhone(response.data.data.Data.phone);
        setTTL(response.data.data.Data.ttl);
      //  setPassword(bcrypt.hashSync(response.data.data.Data.password));
        console.log("get pass " +response.data.data.Data.password)
        console.log("get pass check bcrypt " +bcrypt.compareSync("rahasia", response.data.data.Data.password))
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });
  }, []);

  const handleSave = (e) => {
    setMode("view");
    e.preventDefault();
    if (SandiKonfirmasi !== Sandibaru) {
      alert("Mohon Periksa sandi yang Anda masukkan");
      setSandiKonfirmasi("");
      setSandiBaru("");
    } else if (emailBaru !== emailKonfirmasi) {
      alert("Mohon Periksa Email yang Anda masukkan");
      setEmailBaru("");
      setEmailKonfirmasi("");
    } else if (name !== "" || phone !== "" || ttl !== "") {
      console.log("sebelum dibcrypt "+password)
      setPassword(bcrypt.hashSync(password))
      console.log("sesudah dibcrypt "+password)
      Axios.post(
        `http://3.15.137.94:8084/api/profile/${Username}/update`,
        { name, email, phone, ttl, password },
        config
      )
        .then((response) => {
          console.log("Berhasil Update");
          alert("Data telah diperbarui");
           window.location.reload(false);
          console.log(" sandi konfirmasi " + SandiKonfirmasi, " sandi baru "+ Sandibaru, " sandi sekarang " + password)
        })
        .catch((err) => {
          setError(err.message);
          setLoading(true);
        });
    } else {
      alert("periksa kembali data");
    }
  };

  const handleEdit = () => {
    setMode("edit");
  };

  return (
    <main className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h4>Profile</h4>
          <div className="d-flex flex-row">
            <div className="col-sm-4">
              <p className="font-weight-bold">Nama</p>
              {mode === "view" ? (
                <p>{name === "" ? "Mohon Perbarui Data Anda" : name}</p>
              ) : (
                <input
                  type="text"
                  name="namaUser"
                  className="form-control w-50"
                  onChange={(e) => setNama(e.target.value)}
                />
              )}
              {mode === "view" ? (
                <>
                  <p className="font-weight-bold">Email</p>

                  <p id="email">{email}</p>
                </>
              ) : (
                <>
                  <p className="font-weight-bold">Email Lama</p>
                  <input
                    type="email"
                    className="form-control w-50"
                    onChange={(e) => {setEmail(e.target.value)
                    setEmailKonfirmasi(e.target.value)} }
                  />
                  
                </>
              )}

              {mode === "view" ? null : (
                <>
                  <p className="font-weight-bold">Sandi Baru</p>

                  <input
                    type="password"
                    className="form-control w-50"
                    onChange={(e) => setSandiBaru(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="col-sm-4">
              <p className="font-weight-bold">Phone</p>

              {mode === "view" ? (
                <p id="phone">
                  {phone === "" ? "Mohon Perbarui Data Anda" : phone}
                </p>
              ) : (
                <input
                  type="tel"
                  className="form-control w-50"
                  onChange={(e) => setPhone(e.target.value)}
                />
              )}

              {mode === "view" ? null : (
                <>
                  <p className="font-weight-bold">Email Baru</p>
                  <input
                    type="email"
                    className="form-control w-50"
                    onChange={(e) => setEmailBaru(e.target.value)}
                  />
                </>
              )}

              {mode === "view" ? null : (
                <>
                  <p className="font-weight-bold">Konfirmasi Sandi Baru</p>

                  <input
                    type="password"
                    className="form-control w-50"
                    onChange={(e) => setSandiKonfirmasi(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="col-sm-4">
              <p className="font-weight-bold">Tempat & Tanggal Lahir</p>
              {mode === "view" ? (
                <p id="ttl">{ttl === "" ? "Mohon Perbarui Data Anda" : ttl}</p>
              ) : (
                <input
                  type="text"
                  className="form-control w-50"
                  onChange={(e) => setTTL(e.target.value)}
                />
              )}
              {mode === "view" ? null : (
                <>
                  <p className="font-weight-bold">Sandi Lama</p>

                  <input
                    type="password"
                    className="form-control w-50 mb-1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}
              <button
                className="btn btn-change px-5 mt-3"
                onClick={mode === "view" ? handleEdit : handleSave}
              >
                {mode === "view" ? "Ubah Profile" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangeProfile;
