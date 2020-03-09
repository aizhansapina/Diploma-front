import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import Header from "../../shared/header/Header";

export default class AuthLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
