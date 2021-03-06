import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, Form, Col, Modal } from "react-bootstrap";
import { removeUserSession, getToken, getUsername } from "../../utils/Common";
import { useHistory } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/icon.svg";
import Info from "../../assets/info.svg";
import headerIMG from "../../assets/profileIMG.jpg";
import axios from "axios";

function Dashboard() {

  const [articles, setArticles] = useState([]);
  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUsername());
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [type_post, setType_post] = useState("");
  const [kategori, setKategori] = useState("");
  const history = useHistory();
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const currenDate = new Date();
  let today = hari[currenDate.getDay()];
  let month = bulan[currenDate.getMonth()];
  const [mode, setMode] = useState("view");

  const handleCancel = () => {
    setMode("edit");
  };

  const handleAddPost = () => {
    setMode("view");
  };

  const handleLogout = () => {
    removeUserSession();
    history.push("/Login");
  };
  
  const config = {
    headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization : `${token}`
    },
  };

  useEffect(() => {
    axios.get("http://3.15.137.94:8084/api/dashboard/all", config)
    .then(response => setArticles(response.data.data.Data.reverse()));
  }, [articles]);

  function handlePost(e) {
    e.preventDefault();
    axios.post("http://3.15.137.94:8084/api/dashboard", {title,deskripsi,username,type_post,kategori}, config)
    setMode("view");
    console.log("Berhasil Post");
  }

  const [like, setLike] = useState("false");
  function handleLike(id_article) {
    axios.post(`http://3.15.137.94:8084/api/likei/${id_article}`,{}, config)
    setLike("true");
  }

  function handleDislike(id_article) {
    axios.post(`http://3.15.137.94:8084/api/liked/${id_article}`,{}, config)
    setLike("false");
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deletePost(id_article) {
    axios.post("http://3.15.137.94:8084/api/dashboard/delete",{ID : id_article}, config)
    handleClose();
  }
  
  const [comment, setComment] = useState("");
  const [commentshow, setCommentshow] = useState("false");
  const handleClosecomment = () => setCommentshow("false");
  const handleShowcomment = () => setCommentshow("true");
  function handleComment(id_article) {
    axios.post(`http://3.15.137.94:8084/api/comment/${id_article}`,{isi : comment, username : username}, config)
    setComment("");
  }

  return (
    <>
      <header className="container-fluid card">
        <div className="row">
          <span className="mx-4" />
          <img src={Logo} alt="Logo" />
          <div className="form-group has-search pt-4 pl-4 w-50 mx-4">
            <span className="fa fa-search form-control-feedback" />
            <input
              type="text"
              className="form-control pl-5"
              placeholder="Search Articles and Collaboration"
            />
          </div>
          <button className="btn btn-createGroup mx-4 my-4">
            Create Group
          </button>

          <div className="dropdown">
            <img className="img-dashboard mt-2" src={headerIMG} />
            <div className="dropdown-content">
              <a href="/Profile">Profile</a>
              <a href="/Login" onClick={handleLogout} value="Login">
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <div className="row main-wrap ">
        <nav className="col-md-3 d-none d-md-block sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/Dashboard">
                <i className="fa fa-dashboard pt-4" aria-hidden="true"></i>
                {" "}Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
 
              <li className="nav-item">
                <a className="nav-link" href="/Group">
                <i className="fa fa-group pt-4" aria-hidden="true"></i>
                {" "}Group
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dashboard">
                <i className="fa fa-file pt-4" aria-hidden="true"></i>
                {" "}Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dashboard">
                <i className="fa fa-star pt-4" aria-hidden="true"></i>
                {" "}Innovation Showcase
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
          {/* <div className="col-sm-3 left-Bar sticky-top">
            <div className="d-flex">
              <i className="fa fa-braille pt-4" aria-hidden="true"></i>
              <a className="text-secondary" href="/Dashboard">
                <p className="pt-3 pl-2">Dashboard</p>
              </a>
            </div>
            <div className="d-flex">
              <i className="fa fa-suitcase pt-4" aria-hidden="true"></i>
              <a className="text-secondary" href="">
                <p className="pt-3 pl-2">Projects</p>
              </a>
            </div>
            <div className="d-flex">
              <i className="fa fa-users pt-4" aria-hidden="true"></i>
              <a className="text-secondary" href="/Group">
                <p className="pt-3 pl-2">Group</p>
              </a>
            </div>
            <div className="d-flex">
              <i className="fa fa-file pt-4" aria-hidden="true"></i>
              <a className="text-secondary" href="">
                <p className="pt-3 pl-2">Portfolio</p>
              </a>
            </div>
            <div className="d-flex">
              <i className="fa fa-star pt-4" aria-hidden="true"></i>
              <a className="text-secondary" href="">
                <p className="pt-3 pl-2">Innovation Showcase</p>
              </a>
            </div>
          </div> */}
          <div className="col-sm-6 h-scroll">
            <div className="d-flex mt-2">
              <button type="button" className="btn button-tags">
                All
              </button>
              <button type="button" className="btn  btn-tag">
                Lifestyle
              </button>
              <button type="button" className="btn  btn-tag">
                Art
              </button>
              <button type="button" className="btn  btn-tag">
                Technology
              </button>
              <p className="ml-auto">
                <span className="text-primary">{today}</span>,{" "}
                {currenDate.getDate()} {month} {currenDate.getFullYear()}
              </p>
            </div>
            <img className="w-100" src={Info} />
            <div className="d-flex justify-content-between">
              <h4 className="mt-2">All Categories</h4>
              <button
                className={(mode==="view")?"btn btn-md btn-createGroup mx-3 my-3":"btn btn-md btn-danger mx-3 my-3"}
                onClick={mode === "view" ? handleCancel : handleAddPost}
              >
                {(mode==="view")?"Create Post":"Cancel"}
              </button>
            </div>
            {mode === "view" ? null : (
              <div className="card w-100 my-2 bg-light">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-2 font-weight-bold text-center">
                      {username}<br></br>
                      <img className="img-dashboard mt-2" src={headerIMG} />
                    </div>
                    <div className="col-10">
                  <form onSubmit={mode === "view" ? handleCancel : handlePost}>
                          <FormGroup controlId="tittle">
                            <FormControl
                              autoFocus
                              type="tittle"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                              type="tittle"
                              placeholder="Judul"
                            />
                          </FormGroup>
                          <FormGroup controlId="deskripsi">
                            <FormControl
                              className="h-50 pb-5"
                              value={deskripsi}
                              onChange={e => setDeskripsi(e.target.value)}
                              type="deskripsi"
                              placeholder="Deskripsi"
                              as="textarea" 
                              rows={3}
                            />
                          </FormGroup>
                          
                          <Form.Row>
                          <Col>
                            <FormGroup controlId="type">
                              <FormControl
                                value={type_post}
                                onChange={e => setType_post(e.target.value)}
                                type="type"
                                placeholder="Type"
                                as="select"   
                                defaultValue=""
                              >
                              <option value="" disabled>Type</option>
                              <option>Article</option>
                              <option>News</option>
                              <option>Others</option>
                              </FormControl>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup controlId="category">
                              <FormControl
                                value={kategori}
                                onChange={e => setKategori(e.target.value)}
                                type="category"
                                placeholder="Category"
                                as="select"   
                                defaultValue=""
                              >
                              <option value="" disabled>Category</option>
                              <option>Sport</option>
                              <option>Finance</option>
                              <option>Life</option>
                              <option>Fashion</option>
                              <option>Others</option>
                              </FormControl>
                            </FormGroup>
                          </Col>
                          </Form.Row>

                          {/* <div className="text-right">  
                            <a href="/register"> Lupa Password? </a>
                          </div> */}
                          
                        <Button className="btn btn-md btn-color font-weight-bold my-3 pull-right" type="submit">Post</Button>
                     </form>
                      {/* <input
                        className="form-control border-0"
                        placeholder="Title"
                        id="title"
                      />
                      <input
                        className="form-control h-50 pb-5 pt-4"
                        type="text"
                        placeholder="Write Something"
                      />
                      <div className="d-flex justify-content-between">
                        <i
                          className="fa fa-file-image-o pt-4"
                          aria-hidden="true"
                        ></i>
                        <button
                          className="btn btn-lg btn-change px-3 mt-3 ml-auto"
                          onClick={
                            mode === "view" ? handleAddPost : handleSavePost
                          }
                        >
                          {mode === "view" ? null : "Post"}
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              
            )}
           
            
           {articles.map((article) => 
            <div className="card w-100 my-2" key={article.ID}>
              <div className="card-body">
                <div className="row">
                  <div className="col-2 font-weight-bold text-center">
                      {article.username}<br></br>
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                   
                    <div className="d-flex flex-row-reverse bd-highlight">
                      <div>
                        <button className="btn">
                          <i className={(article.username === username) ? "fa fa-edit text-secondary":"fa fa-edit text-secondary invisible"}></i>
                        </button>
                        <button className="btn" onClick={() => deletePost(article.ID)}>
                        {/* use modal */}
                        {/* <button className="btn" onClick={(article.username === username) ? handleShow : null}> */}
                          <i className={(article.username === username) ? "fa fa-trash text-secondary":"fa fa-trash text-secondary invisible"}></i>
                        </button>
                        </div>
                    </div>
                    {/* <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure to delete this post?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={() => deletePost(article.ID)}>
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal> */}
                    <div className="d-flex justify-content-start">
                      <h6>{article.type_post} {"-"} {article.kategori}</h6>
                    </div>
                    <h4 className="card-title">
                      {article.title}
                    </h4>
                    
                    <p className="card-text">
                      {article.deskripsi}
                    </p>
                    <div className="d-flex justify-content-between">
                    <h4 className="">
                    {article.like}  <i className="fa fa-heart text-danger" aria-hidden="true"> </i>
                    </h4>
                    <h4 className="">
                    {article.Comment.length} <i className="fa fa-comment text-primary" aria-hidden="true"> </i>
                    </h4>
                    </div>

                      <hr></hr>
                    <div className="d-flex justify-content-between">
                      {/* <button 
                        className="btn"
                        onClick={like === "false" ? () => handleLike(article.ID) : () => handleDislike(article.ID)}
                      >
                        <i  className={like === "false" ? "fa fa-heart" : "fa fa-heart text-danger"} aria-hidden="true"> </i> 
                      </button> */}
                      <button className="btn" onClick={() => handleLike(article.ID)}><i className="fa fa-thumbs-up" aria-hidden="true"> </i> </button>
                      <button className="btn" onClick={() => handleDislike(article.ID)}><i className="fa fa-thumbs-down" aria-hidden="true"> </i> </button>
                      <button className="btn" onClick={(commentshow === "false")?handleShowcomment:handleClosecomment}><i className="fa fa-comment" aria-hidden="true"> </i></button>
                      
                      <button className="btn"><i className="fa fa-share" aria-hidden="true"></i></button>
                    </div>
                    <hr></hr>
                    {commentshow === "false" ? null : (
                    <div className="container">
                      <h4 className="font-weight-bold">Comments</h4>
                      {article.Comment.map((com) => 
                      <div className="card w-100 my-2" key={com.ID}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                            {com.username}
                            </div>
                            <div className="col-md-9">
                            {com.isi}
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    
                      <div className="card w-100 my-2">
                        <div className="card-body bg-light">
                          <div className="row">
                                <div className="col-md-3">
                                {username}
                                </div>
                                <div className="col-md-9">
                                
                                  <FormGroup controlId="comment">
                                    <FormControl
                                      type="comment"
                                      value={comment}
                                      onChange={e => setComment(e.target.value)}
                                      placeholder="Comment"
                                    />
                                  </FormGroup>
                                  <Button onClick={() => handleComment(article.ID)} className="btn btn-md btn-color font-weight-bold my-3 pull-right" type="submit">Comment</Button>
                                
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
           )}
            </div>
            {/* <div className="card w-100 my-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 className="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p className="card-text">
                      Many focused on a book which attracted huge numbers of
                      complaints about encouragix sexual assault. Users who
                      received responses to long-expired projects from 2013 took
                      to Twitter to congartulate the company on its responses
                      timess..
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn">Like</button>
                      <button className="btn">Comment</button>
                      <button className="btn">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-100 my-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 className="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p className="card-text">
                      Many focused on a book which attracted huge numbers of
                      complaints about encouragix sexual assault. Users who
                      received responses to long-expired projects from 2013 took
                      to Twitter to congartulate the company on its responses
                      timess..
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn">Like</button>
                      <button className="btn">Comment</button>
                      <button className="btn">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-100 my-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 className="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p className="card-text">
                      Many focused on a book which attracted huge numbers of
                      complaints about encouragix sexual assault. Users who
                      received responses to long-expired projects from 2013 took
                      to Twitter to congartulate the company on its responses
                      timess..
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn">Like</button>
                      <button className="btn">Comment</button>
                      <button className="btn">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-sm-3">
            <div className="card w-100 my-4">
              <div className="card-body">
                <h3 className="card-title">Popular Contributor</h3>
                <div className="d-flex flex-column text-center">
                  <a className="card-text">#Excel</a>
                  <a className="card-text">#Ipensius</a>
                  <a className="card-text">#Nadya</a>
                  <a className="card-text">#Vanni</a>
                </div>
              </div>
            </div>
            <div className="card w-100 my-3">
              <div className="card-body">
                <h3 className="card-title">Popular Articles</h3>
                <div className="d-flex flex-column text-center">
                  <a className="card-text">#Tech</a>
                  <a className="card-text">#Lifestyles</a>
                  <a className="card-text">#E-Money</a>
                  <a className="card-text">#MoneyManagement</a>
                </div>
              </div>
            </div>
            <div className="card w-100 my-3">
              <div className="card-body">
                <h3 className="card-title">Popular Tags</h3>
                <div className=" text-center">
                  <button type="button" className="btn button-tags my-2">
                    Life Style
                  </button>
                  <button type="button" className="btn button-tags my-2">
                    Art
                  </button>
                  <button type="button" className="btn button-tags my-2">
                    Technology
                  </button>
                  <button type="button" className="btn button-tags my-2">
                    Craft
                  </button>
                  <button type="button" className="btn button-tags my-2">
                    Management
                  </button>
                  <button type="button" className="btn button-tags my-2">
                    Artificial
                  </button>
                  <button type="button" className="btn button-tags">
                    Beach
                  </button>
                  <button type="button" className="btn button-tags">
                    Craft
                  </button>
                  <button type="button" className="btn button-tags">
                    +20 more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div></div>
    </>
  );
}

export default Dashboard;
