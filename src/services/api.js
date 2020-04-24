import axios from "axios";

const api = axios.create({
  baseURL: "http://104.248.114.51:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
