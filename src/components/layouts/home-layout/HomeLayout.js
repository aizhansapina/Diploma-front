import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Moduls from "../../moduls/Moduls";

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Route path={process.env.PUBLIC_URL} component={Home} />
        {/* <Route path={process.env.PUBLIC_URL} components={HomeLayout}></Route> */}
      </div>
    );
  }
}
