import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { getToken, getID, getUsername } from "../../utils/Common";
import "./style.css"
import axios from "axios";

function PrefCategory() {

    const[categories, setCategories] = useState([]);
    const [token, setToken] = useState(getToken());
    const [Username, setUsername] = useState(getUsername());
    const config = {
        headers: {
        "Content-Type": "application/json",
        Authorization : token
        },
      };
    axios.get(`http://3.15.137.94:8084/api/pref/${Username}`, config)
    .then(response => setCategories(response.data.data.Data));


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
                            {categories.map((category)=> 
                                <form>
                                <label>
                                    <input
                                        className="mx-2"
                                        name="multicategories"
                                        value={""}
                                        type="checkbox"
                                        onChange={""} 
                                    />
                                {category.jenis_kategori}
                                </label>
                                </form>
                            )}
                                
                            <div>
                                <a href="/Dashboard" className="btn text-light float-left font-weight-bold">Submit</a>
                            </div>
                            <div>
                                <a href="/Dashboard" className="btn text-light float-right font-weight-bold">Skip {'>'}</a>
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
