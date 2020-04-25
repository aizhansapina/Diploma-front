import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeLayout from "./components/layouts/home-layout/HomeLayout";
import MainLayout from "./components/layouts/main-layout/MainLayout";
import AuthLayout from "./components/layouts/auth-layout/AuthLayout";
import Listening from "./components/content/Listening/Listening";
import Reading from "./components/content/Reading/Reading";
import Writing from "./components/content/Writing/Writing";
import Speaking from "./components/content/Speaking/Speaking";
import SandW from "./components/content/SpeakingAndWriting/SandW";
import Grammar from "./components/content/Grammar/Grammar";
import Video from "./components/content/Video/Video";
import Moduls from "./components/moduls/Moduls";
import UserSubscription from "./components/subscription/UserSubscription";

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
