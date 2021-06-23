import { useState, useEffect } from "react";
import { getToken, getUsername } from "../../utils/Common";

import { Button, Modal } from "react-bootstrap";

import Axios from "axios";

export default function Portofolio() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [username, setUsername] = useState(getUsername());
  const [token, setToken] = useState(getToken());
  const [PortEXP, setPortEXP] = useState([]);
  const [PortEXPERT, setPortEXPERT] = useState([]);
  const [exprience, setEXP] = useState("");
  const [tahun_Exprience, setTahunEXP] = useState("");
  const [expertise, setExpertise] = useState("");
  const [jabatan_expertise, setJabatanEXP] = useState("");
  const [idportofolio, setID] =useState(0);
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAs, setShowAs] = useState(false);
  const handleCloseAs = () => setShowAs(false);
  const handleShowAS = () => setShowAs(true);

  const [mode, setMode] = useState("view");
  const [modeEXPERT, setModeEXPERT] = useState("view");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  };

  useEffect(() => {
    Axios.get(
      `http://3.15.137.94:8084/api/portofolio/${username}`,
      config
    ).then((response) => {
      setPortEXP(response.data.data.Portofolio.Exprience);
      setPortEXPERT(response.data.data.Portofolio.Expertise);
      setID(response.data.data.Portofolio.ID)
     });
  }, []);

  const experiencePost = (e) => {
    e.preventDefault();
    Axios.post(
      `http://3.15.137.94:8084/api/portofolio/insertExp/${username}`,
      { idportofolio, username, exprience, tahun_Exprience },
      config
    );
    setMode("view");
    console.log("Berhasil Post Experience");
  };

  
  const experienceUpdate = (id_EXP) => {
    Axios.post(
      `http://3.15.137.94:8084/api/portofolio/updateExp/${id_EXP}`,
      { idportofolio : id_EXP, username, exprience, tahun_Exprience },
      config
    );
    handleClose();
    console.log("Berhasil Post Experience");
    console.log(id_EXP)
  };

  const experienceDelete = (id_EXP) => {
    Axios.post(
      `http://3.15.137.94:8084/api/portofolio/deleteExp/${id_EXP}`,
       {ID : id_EXP},
      config
    );
    handleClose();
    console.log("Berhasil Delete Experience");
  };

  const expertisePost = (e) => {
    e.preventDefault();
    Axios.post(
      `http://3.15.137.94:8084/api/portofolio/insertExt/${username}`,
      { idportofolio, username, expertise, jabatan_expertise },
      config
    );
    setModeEXPERT("view");
    console.log("Berhasil Post Expertise");
  };

  const experitiseDelete = (id_EXP) => {
    Axios.post(
      `http://3.15.137.94:8084/api/portofolio/deleteExt/${id_EXP}`,
       {ID : id_EXP},
      config
    );
    handleCloseAs();
    console.log("Berhasil Delete ExperTISE");
  };

  const handleCancel = () => {
    setMode("edit");
  };

  const handleAddPost = () => {
    setMode("view")
  };

  const handleCancelEXPERT = () => {
    setModeEXPERT("edit");
  };

  const handleAddPostEXPERT = () => {
    setModeEXPERT("view")
  };
  return (
    <main className="container-fluid">
      <div className="card my-4">
        <div className="card-body">
          <h5>Experience</h5>
          {PortEXP.map((EXP) => (<>
          <div key={EXP.ID}>
          <span className="d-flex justify-content-between" >
              <p>{EXP.exprience}</p>
              <p>
                {EXP.tahun_Exprience}
                <a onClick={handleShow}>
                  <i className="fa fa-pencil" />
                </a>
              </p>
            </span>       
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span className="d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="Add Experience"
                  className="form-control w-50"
                  onChange={(e) => {
                    setEXP(e.target.value);
                    
                  }}
                />
                <input
                  type="text"
                  placeholder="Year Experience"
                  className="form-control w-50"
                  onChange={(e) => {
                    setTahunEXP(e.target.value);
                  }}
                />
              </span>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={()=>experienceDelete(EXP.ID)}>
                Delete
              </Button>
              <Button variant="primary" onClick={()=>experienceUpdate(EXP.ID)}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
     
          </>
          )
          
          )}


          <span className="d-flex justify-content-center mt-3">
            <a
              className="btn text-primary"
              onClick={mode === "view" ? handleCancel : null}
            >
                  {(mode==="view")?"Add New Experience ":""}
            </a>
          </span>
        </div>
      </div>
      {mode === "view" ? null : (
        <div className="card my-4">
          <div className="card-body">
          <a  onClick={() => {setEXP("")
                    setTahunEXP("")
                    handleAddPost()} }>
            
                <p className="btn btn-close float-right ">x</p>
              </a>
            <h5>Add New Experience</h5>
            <span className="d-flex justify-content-center mt-5"> 
            <label className="mx-4">Experience</label> <input className="form-control w-50"  onChange={e => setEXP(e.target.value)} />
            <label className="mx-4">Year</label> <input className="form-control w-50" onChange={e => setTahunEXP(e.target.value)}/>
            </span>
            <button
                className="btn btn-change pull-right px-5 mt-3"
                onClick={experiencePost }
              >
                Simpan
              </button>
          </div>
        </div>
      )}

      <div className="card my-4">
        <div className="card-body">
          <h5>Expertise/Knowledges</h5>
          {PortEXPERT.map((EXP) => (
            <>
            <div key={EXP.ID}>
            <span className="d-flex justify-content-between">
              <p>{EXP.expertise}</p>
              <p>
                {EXP.jabatan_Expertise} 
                <a onClick={handleShowAS}>
                 <i className="fa fa-pencil"/></a>
              </p>
            </span>
            <Modal show={showAs} onHide={handleCloseAs}>
            <Modal.Header closeButton>
              <Modal.Title>Expertise</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete this post?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={()=>experitiseDelete(EXP.ID)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => {}}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
            </div>
          
            </>
          ))}
          <span className="d-flex justify-content-center mt-3">
            <a
              className="btn text-primary"
              onClick={modeEXPERT === "view" ? handleCancelEXPERT : null}
            >
                  {(modeEXPERT==="view")?"Add New Expertise ":""}
            </a>
          </span>
        </div>
      </div>

      {modeEXPERT === "view" ? null : (
        <div className="card my-4">
          <div className="card-body">
          <a  onClick={() => {
                    handleAddPostEXPERT()} }>
            
                <p className="btn btn-close float-right ">x</p>
              </a>
            <h5>Add New Expertise</h5>
            <span className="d-flex justify-content-center mt-5"> 
            <label className="mx-4">Expertise</label> <input className="form-control w-50"  onChange={e => setExpertise(e.target.value)} />
            <label className="mx-4">Role</label> <input className="form-control w-50" onChange={e => setJabatanEXP(e.target.value)}/>
            </span>
            <button
                className="btn btn-change pull-right px-5 mt-3"
                onClick={expertisePost }
              >
                Simpan
              </button>
          </div>
        </div>
      )}

      

      <div className="card my-4">
        <div className="card-body">
          <h5>Kontribusi Artikel</h5>
          <span className="d-flex justify-content-between">
            <p>Mengatur Keuangan di Masa Pandemi </p>
            <p>
              Di Post 20 November 2020 <i className="fa fa-pencil" />
            </p>
          </span>
          <span className="d-flex justify-content-between">
            <p>Mengatur Keuangan di masa Pandemi </p>
            <p>
              Di Post 20 November 2020 <i className="fa fa-pencil" />
            </p>
          </span>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h5>Grup Proyek Inovasi</h5>
          <p className="font-weight-bold">Banking Social App</p>
          <p>
            Merupakan Grup Project Banking Social App, yang dibuat dalam Rangka
            Meningkatkan Kepedulian Para Penggiat Bank dalam Hubungan Social
            Bermasyarakat
          </p>
          <span className="d-flex justify-content-between">
            <p>Customer Relation di Bank BNI </p>
            <p>
              2017-2020 <i className="fa fa-pencil" />
            </p>
          </span>
          <span className="d-flex justify-content-between">
            <p>Customer Relation di Bank BRI </p>
            <p>
              2017-2020 <i className="fa fa-pencil" />
            </p>
          </span>
          <span className="d-flex justify-content-center mt-3">
            <button className="btn text-primary ">Tambah Experience</button>
          </span>
        </div>
      </div>
    </main>
  );
}
