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
                        <a href="/Login">
                            <img src={x} className="mx-2 my-3"/>
                        </a>
                        <div className="text-center">
                            <h1 className="text-light font-weight-bold">Verifikasi Email Anda Berhasil</h1>

                        </div>
                        <div className="text-center">
                            <img src={verif} className=""/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-light">
                            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i><br></br>
                            Tunggu Sebentar <br></br> 
                            Anda akan Diarahkan ke <a href="/Login" className="font-weight-bold text-light">Halaman Login</a> 
                                
                            </h5>

                    </div>
          </div>

          
        </div>
        </div>
                    
                    
    )
}

export default Verification
