import axios from "axios";

// const url = "https://drumroll-cms.herokuapp.com/api/";
const url = "http://127.0.0.1:1337";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
