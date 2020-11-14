import axios from "axios";

export default axios.create({
  baseURL: "http://3.15.137.94:8084/api/",
  headers: {
    "Content-type": "application/json"
  }
});
