import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../shared/header/Header";
import Main from "../../pages/main/Main";
import Profile from "../../pages/profile/Profile";
import Moduls from "../../moduls/Moduls";
// import Order from "../../pages/order/Order";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/main/subscriptions/get_subscriptions/" component={Main} />
          <Route exact path="/main/profile" component={Profile}></Route>
          <Route exact path="/module_lessons/get_modules/" component={Moduls} />
        </Switch>
      </div>
    );
  }
}
