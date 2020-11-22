import headerIMG from "../../assets/profileIMG.jpg";
import { useState, useEffect } from "react";
import { getToken, getID, getUsername } from "../../utils/Common";
import Axios from "axios";

const Header = () => {
  const [token, setToken] = useState(getToken());
  const [Username, setUsername] = useState(getUsername());
  const [Id, setId] = useState(getID());
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState([]);
  const [itemName, setItemName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [foto, setFoto] = useState("");
  //const objectURL = URL.createObjectURL(foto);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*",
      Authorization: token,
    },
  };

  useEffect(() => {
    Axios.get(`http://3.15.137.94:8084/api/profile/${Username}`, config) 
    .then((response) => {
        setUsername(response.data.data.Data.Username);
        setEmail(response.data.data.Data.email);
        setFoto(response.data.data.Data.foto)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });
  }, []);

  useEffect(() => {
    Axios.get(`http://3.15.137.94:8084/api/dashboard/list/${Username}`, config) 
    .then((response) => {
        setKategori([response.data.data.Data.[0].jenis_kategori]);
        console.log(kategori);
console.log(response.data.data.Data.[0].jenis_kategori);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });
  }, []);


 
   
  // On file upload (click the upload button) 
//  const  onFileUpload = () => { 
   
//     // Create an object of formData 
//     const formData = new FormData(); 
   
//     // Update the formData object 
//     formData.append( 
//       "foto user", 
//       foto, 
//       foto.name 
//     ); 
   
//     // Details of the uploaded file 
//     console.log(this.state.selectedFile); 
   
//     // Request made to the backend api 
//     // Send formData object 
//     e.preventDefault();
//     Axios.post(
//       `http://3.15.137.94:8084/api/profile/${Username}/update`,
//       {foto},
//       config
//     )
//       .then((response) => {
//         console.log("Berhasil Update");
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(true);
//       });
//     }
  
//     // On file select (from the pop up) 
//     onFileChange = event => { 
       
//       // Update the state 
//       this.setState({ selectedFile: event.target.files[0] }); 
     
//     };
//   }; 
   
//   // File content to be displayed after 
//   // file upload is complete 
//   const fileData = () => { 
   
//     if (this.state.selectedFile) { 
        
//       return ( 
//         <div> 
//           <h2>File Details:</h2> 
//           <p>File Name: {this.state.selectedFile.name}</p> 
//           <p>File Type: {this.state.selectedFile.type}</p> 
//           <p> 
//             Last Modified:{" "} 
//             {this.state.selectedFile.lastModifiedDate.toDateString()} 
//           </p> 
//         </div> 
//       ); 
//     } else { 
//       return ( 
//         <div> 
//           <br /> 
//           <h4>Choose before Pressing the Upload button</h4> 
//         </div> 
//       ); 
//     } 
//   }; 

  return (
    <>
    <header className="container-fluid py-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2">
              <img className="img-header" src={foto === null? `${headerIMG}`: `data:image/png;base64, ${foto}`} alt="gambar user" />
            </div>
            <div className="col-sm-10 no-padding">
              <a href="/Dashboard">
                <p className="btn btn-close float-right ">X</p>
              </a>
              <h2 className="">{Username}</h2>
              <p>{email}</p>
              <h4>Tags</h4>
              <button type="button" className="btn button-tags">
                Lifestyle
              </button>
              <button type="button" className="btn  button-tags">
                Art
              </button>
              <button type="button" className="btn  button-tags">
                Technology
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
