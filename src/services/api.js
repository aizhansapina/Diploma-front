import axios from "axios";

const api = axios.create({
  baseURL: "http://198.199.121.47",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
