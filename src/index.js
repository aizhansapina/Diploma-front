import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import cartReducer from "../src/store/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
