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

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={HomeLayout} />
        {/* <Route path={process.env.PUBLIC_URL} components={HomeLayout}></Route> */}
        <Route path="/main" component={MainLayout} />
        <Route path="/auth" component={AuthLayout} />
        <Route path="/listening" component={Listening} />
        <Route path="/reading" component={Reading} />
        <Route path="/writing" component={Writing} />
        <Route path="/speaking" component={Speaking} />
        <Route path="/speaking-writing" component={SandW} />
        <Route path="/grammar" component={Grammar} />
        <Route path="/video" component={Video} />
        <Route path="/module_lessons/get_modules/" component={Moduls} />
      </Switch>
    </>
  );
}

export default App;
