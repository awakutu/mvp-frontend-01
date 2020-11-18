import React from 'react';
import { Button, FormGroup, FormControl, Image } from "react-bootstrap";
import x from '../../assets/x.png';
import verif from '../../assets/verif.png';
import login from '../../assets/login.png';
import "./style.css";

function Verification() {
    return (
        <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6 ">
            <Image className="img-fluid" src={login}></Image>
          </div>
          <div className="col-md-6 verif bg-col">
                        <a href="/Register">
                            <img src={x} className="mx-2 my-3"/>
                        </a>
                        <div className="text-center">
                            <h1 className="text-light font-weight-bold">Cek Email Kamu</h1>

                        </div>
                        <div className="text-center">
                            <img src={verif} className=""/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-light">
                                Link Verifikasi telah dikirimkan ke email kamu <br/>
                                Segera cek email dan klik tombol <span className="font-weight-bold">Verifikasi Email</span> <br/>
                                agar kamu dapat bergabung di Co-Create Platform
                            </h5>

                    </div>
          </div>

          
        </div>
        </div>
                    
                    
    )
}

export default Verification
