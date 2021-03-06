import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../shared/header/Header";
import Main from "../../pages/main/Main";
import Profile from "../../pages/profile/Profile";
import Moduls from "../../moduls/Moduls";
import UserSubscription from "../../subscription/UserSubscription";
import Listening from "../../content/Listening/Listening";
import Speaking from "../../content/Speaking/Speaking";
import Reading from "../../content/Reading/Reading";
import Writing from "../../content/Writing/Writing";
import SandW from "../../content/SpeakingAndWriting/SandW";
import Grammar from "../../content/Grammar/Grammar";
import Video from "../../content/Video/Video";
import Lesson from "../../lesson/Lesson";
import Quiz from "../../quiz/Quiz";
import Leaderboard from "../../leaderboard/Leaderboard"

export default class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
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
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route
            exact
            path="/main/subscriptions/get_subscriptions/"
            component={Main}
          />
          <Route exact path="/main/profile" component={Profile}></Route>
          <Route
            exact
            path="/main/module_lessons/get_modules/"
            component={Moduls}
          />
          <Route exact path="/main/module/lesson" component={Lesson} />
          <Route
            path="/main/user_subscription/get_subscription/"
            component={UserSubscription}
          />
          <Route exact path="/main/listening" component={Listening} />
          <Route exact path="/main/reading" component={Reading} />
          <Route exact path="/main/writing" component={Writing} />
          <Route exact path="/main/speaking" component={Speaking} />
          <Route exact path="/main/speaking-writing" component={SandW} />
          <Route exact path="/main/grammar" component={Grammar} />
          <Route exact path="/main/video" component={Video} />
          <Route exact path="/main/task/" component={Quiz} />
          <Route exact path="/main/leaderboard/" component={Leaderboard} />
        </Switch>
      </div>
    );
  }
}
