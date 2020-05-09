import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeLayout from "./components/layouts/home-layout/HomeLayout";
import MainLayout from "./components/layouts/main-layout/MainLayout";
import AuthLayout from "./components/layouts/auth-layout/AuthLayout";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={HomeLayout} />
        <Route path="/main" component={MainLayout} />
        <Route path="/auth" component={AuthLayout} />
      </Switch>
    </>
  );
}

export default App;
