import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import Header from "../../shared/header/Header";
import { ActivationPage } from "../../pages/auth/ActivationPage";

export default class AuthLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/auth/register/" component={Register} />
          <Route exact path="/auth/users/login/" component={Login} />
          {/* <Route exact path="/auth/activations/activate/:uuid" component={ActivationPage} /> */}
          <Route path="/auth/activations/activate/:uuid">
            <ActivationPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
