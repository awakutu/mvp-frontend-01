import { useState } from "react";
import { removeUserSession } from "../../utils/Common";
import { useHistory } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/icon.svg";
import Info from "../../assets/info.svg";
import headerIMG from "../../assets/profileIMG.jpg";

function Dashboard() {
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

  const handleSavePost = () => {
    setMode("view");
  };

  const handleAddPost = () => {
    setMode("edit");
  };

  const handleLogout = () => {
    removeUserSession();
    history.push("/Login");
  };

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
          <div className="col-sm-3 left-Bar sticky-top">
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
          </div>
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
                className="btn btn-createGroup mx-4 my-4"
                onClick={mode === "view" ? handleAddPost : null}
              >
                + Create Post
              </button>
            </div>
            {mode === "view" ? null : (
              <div class="card w-100 my-2 ">
                <div class="card-body ">
                  <div className="row">
                    <div className="col-2">
                      <img className="img-dashboard mt-2" src={headerIMG} />
                    </div>
                    <div className="col-10">
                      <input
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div class="card w-100 my-2">
              <div class="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 class="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p class="card-text">
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
            <div class="card w-100 my-2">
              <div class="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 class="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p class="card-text">
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
            <div class="card w-100 my-2">
              <div class="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 class="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p class="card-text">
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
            <div class="card w-100 my-2">
              <div class="card-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-dashboard mt-2" src={headerIMG} />
                  </div>
                  <div className="col-10">
                    <h4 class="card-title">
                      Kikcstarter replies to complaints
                    </h4>
                    <p class="card-text">
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
          </div>

          <div className="col-sm-3">
            <div class="card w-100 my-4">
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
            <div class="card w-100 my-3">
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
            <div class="card w-100 my-3">
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
