import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Moduls from "../../moduls/Moduls";

export default class HomeLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }
  componentDidMount() {
    const token = sessionStorage.getItem("token");
    this.setState({
      isLoggedIn: Boolean(token),
    });
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {/* <Route path={process.env.PUBLIC_URL} component={Home} /> */}

        <Route path={process.env.PUBLIC_URL} >
            <Home isLoggedIn = {isLoggedIn} />
          </Route>
        {/* <Route path={process.env.PUBLIC_URL} components={HomeLayout}></Route> */}
      </div>
    );
  }
}


