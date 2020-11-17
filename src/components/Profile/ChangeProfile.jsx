import { useState } from "react";

export const ChangeProfile = () => {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState("view");

  const handleSave = () => {
    setMode("view");
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
                <p id="name">Jiang Xu Lei</p>
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
                <p id="emailLama">jiangxu@gmail.com</p>
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
              <button className="btn btn-change px-5 mt-3" onClick={mode === "view" ? handleEdit : handleSave}>
            {mode ==="view"? "Ubah Profile" : "Simpan"}
          </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangeProfile;
