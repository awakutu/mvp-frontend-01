import axios from "axios";

export default axios.create({
  baseURL: "3.15.137.94:8040/api/",
  headers: {
    "Content-type": "application/json"
  }
});
