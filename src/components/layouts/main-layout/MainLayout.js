import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../shared/header/Header";
import Main from "../../pages/main/Main";
import Profile from "../../pages/profile/Profile";
import Moduls from "../../moduls/Moduls";
// import Order from "../../pages/order/Order";

export default class MainLayout extends Component {
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
        <Header isLoggedIn = {isLoggedIn}/>
        <Switch>
          <Route exact path="/main/subscriptions/get_subscriptions/" component={Main} />
          <Route exact path="/main/profile" component={Profile}></Route>
          <Route exact path="/module_lessons/get_modules/" component={Moduls} />
        </Switch>
      </div>
    );
  }
}
