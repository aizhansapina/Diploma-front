import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
  headers: {
    "Content-Type": "application/json"
  }
});

if (localStorage.getItem("access_token")) {
  api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
}

export function register(email, password) {
  return api.post("/auth/register", { email, password });
}

export function login(email, password) {
  return api.post("/auth/login", { email, password });
}
