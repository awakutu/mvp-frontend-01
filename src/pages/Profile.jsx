import "../components/profileStyle.css";
import headerIMG from "../components/profileIMG.jpg";
import iconIMG from "../components/profileIcon.svg";

export default function Profile() {
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
                <label for="inputNama" className="col-sm-5 col-form-label">
                  Nama
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="nama"
                    placeholder="Masukkan nama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputNoHP" className="col-sm-5 col-form-label">
                  No Hp.
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="noHP"
                    placeholder="Masukkan No Hp."
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputTTL" className="col-sm-5 col-form-label">
                  Tempat, Tanggal Lahir
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="TTL"
                    placeholder="Masukkan Tempat, Tanggal Lahir."
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmailLama" className="col-sm-5 col-form-label">
                  Email Lama
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="emailLama"
                    placeholder="Masukkan Email Lama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmailBaru" className="col-sm-5 col-form-label">
                  Email Baru
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="emailBaru"
                    placeholder="Masukkan Email Baru"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputSandiLama" className="col-sm-5 col-form-label">
                  Sandi Lama
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="sandiLama"
                    placeholder="Masukkan Sandi Lama"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputSandiBaru" className="col-sm-5 col-form-label">
                  Sandi Baru
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="sandiBaru"
                    placeholder="Masukkan Sandi Baru"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputKonfirmasi"
                  className="col-sm-5 col-form-label"
                >
                  Konfirmasi Sandi Baru
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    className="form-control input-profile"
                    id="konfirmasiSandi"
                    placeholder="Masukkan Kembali Sandi Baru"
                  />
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-end ">
              <button type="button" class="btn btn-info button-tags d-md-table">
                Perbarui
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
