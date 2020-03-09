import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../shared/header/Header";
import Shop from "../../pages/shop/Shop";
import Cart from "../../pages/cart/Cart";
// import Order from "../../pages/order/Order";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/main/shop" component={Shop} />
          {/* <Route exact path="/main/login" component={Login} />
          <Route exact path="/main/register" component={Register} /> */}
          <Route exact path="/main/mycart" component={Cart} />
          {/* <Route exact path="/main/orders" component={Order} /> */}
        </Switch>
      </div>
    );
  }
}
