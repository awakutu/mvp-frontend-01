import React from 'react'
import logo from "../../assets/logo.png"
import "./style.css"

function PrefCategory() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 my-2">
                    <h4>Hai, User!</h4>
                    <h5>Selamat Datang di <img src={logo}></img></h5>
                    <div className="card text-white bg-card mb-3">
                        
                        <div className="card-body">
                            <h6 className="card-title">Kategori artikel apa yang kamu sukai?</h6>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Lifestyle</button>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Art</button>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Technology</button>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Finance</button>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Software Development</button>
                            <button type="button" className="btn btn-category mx-2 my-2 text-light">Other</button>
                           
                            <div>
                            <a href="/Dashboard" className="btn text-light float-right">Skip {'>'}</a>
                            </div>
                            
                        </div>
                    </div>



                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            
        </div>
    )
}

export default PrefCategory
