import { useState, useEffect } from "react";
import { getToken, getID, getUsername } from "../../utils/Common";
import Axios from "axios";

export const ChangeProfile = () => {
  const [mode, setMode] = useState("view");
  const [token, setToken] = useState(getToken());
  const [Username, setUsername] = useState(getUsername());
  const [Id, setId] = useState(getID());
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Sandi, setSandi] = useState("");
  const [Phone, setPhone] = useState("");
  const [TTL, setTTL] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  useEffect(() => {
    Axios.get(`http://3.15.137.94:8084/api/profile/${Username}`, config)
      .then((response) => {
        setNama(response.data.data.name);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);
        setTTL(response.data.data.ttl);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });
  }, []);
  const handleSave = () => {
    setMode("view");
    Axios.post(`http://3.15.137.94:8084/api/profile/${Username}/update`, config)
    .then((response) => {
      
      console.log("Berhasil Update")
    })
    .catch((err) => {
      setError(err.message);
      setLoading(true);
    });
    
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
              <b>
                <p>Nama</p>
              </b>
              {mode === "view" ? (
                <p id="name"></p>
              ) : (
                <input
                  type="text"
                  className="form-control w-50"
                  name="nameInp"
                  id="nameInp"
                />
              )}

              <b>
                <p>Email Lama</p>
              </b>
              {mode === "view" ? (
                <p id="emailLama">{Email}</p>
              ) : (
                <input
                  type="email"
                  className="form-control w-50"
                  name="emailLamaInp"
                  id="emailLamaInp"
                />
              )}

              <b>
                <p>Sandi Baru</p>
              </b>
              {mode === "view" ? (
                <p id="sandiBaru">rahasia</p>
              ) : (
                <input
                  type="password"
                  className="form-control w-50"
                  name="sandiBaruInp"
                  id="sandiBaruInp"
                />
              )}
            </div>
            <div className="col-sm-4">
              <b>
                <p>Phone</p>
              </b>
              {mode === "view" ? (
                <p id="phone">08152845327</p>
              ) : (
                <input
                  type="tel"
                  className="form-control w-50"
                  name="phoneInp"
                  id="phoneInp"
                />
              )}

              <b>
                <p>Email Baru</p>
              </b>
              {mode === "view" ? (
                <p id="emailBaru">jiangxu@gmail.com</p>
              ) : (
                <input
                  type="email"
                  className="form-control w-50"
                  name="emailBaruInp"
                  id="emailBaruInp"
                />
              )}

              <b>
                <p>Konfirmasi Sandi Baru</p>
              </b>
              {mode === "view" ? (
                <p id="konfSandiBaru">rahasia</p>
              ) : (
                <input
                  type="password"
                  className="form-control w-50"
                  name="konfSandiInp"
                  id="konfSandiInp"
                />
              )}
            </div>
            <div className="col-sm-4">
              <b>
                <p>Tempat & Tanggal Lahir</p>
              </b>
              {mode === "view" ? (
                <p id="ttl">Lemona, 7 August 2004</p>
              ) : (
                <input
                  type="text"
                  className="form-control w-50"
                  name="TTLInp"
                  id="TTLInp"
                />
              )}

              <b>
                <p>Sandi Lama</p>
              </b>
              {mode === "view" ? (
                <p id="sandiLama">arahasia</p>
              ) : (
                <input
                  type="text"
                  className="form-control w-50 mb-1"
                  name="emailLamaInp"
                  id="emailLamaInp"
                />
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
