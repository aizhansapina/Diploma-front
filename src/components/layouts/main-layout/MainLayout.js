import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../shared/header/Header";
import Main from "../../pages/main/Main";
import Profile from "../../pages/profile/Profile";
// import Order from "../../pages/order/Order";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/main/page" component={Main} />
          {/* <Route exact path="/main/login" component={Login} />
          <Route exact path="/main/register" component={Register} /> */}
          <Route exact path="/main/profile" component={Profile} />
          {/* <Route exact path="/main/orders" component={Order} /> */}
        </Switch>
      </div>
    );
  }
}
