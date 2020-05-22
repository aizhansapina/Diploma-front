import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../../subscription/UserSubscription.scss";

import active_badge from "../../../images/organization.png";
import inactive_badge from "../../../images/date.png";
import prize from "../../../images/award.png";

import "./Profile.scss";


const Active = ({ is_active }) => {
  if (!is_active) {
    return <td className="subscription_info">not active</td>;
  }
  return <td className="subscription_info">{is_active}</td>;
};

const Subscription = ({ id }) => {
  if (!id) {
    return <h1 className="container_title">no Subscription</h1>;
  }
  return <div className="subscription_container" key={id} />;
};

const Badge = ({completed, id, task}) => {
  if (completed == true) {
    return (
      <div className="badge" key={id}>
        <img src={active_badge} className="badge_image"/>
        <p className="badge_title">{task}</p>
        <p className="badge_subtitle-done">completed</p>
      </div>
    );
  }
  return (
    <div className="badge"  key={id}>
      <img src={inactive_badge} className="badge_image"/>
      <p className="badge_title">{task}</p>
      <p className="badge_subtitle">keep going</p>
    </div>
  );
}

const ActiveBadge = ({ active_completed, active_task, task }) => {
  if(active_completed == true) {
    return (
      <>
        <img src={active_badge} className="badge_image"/>
        <p className="badge_title">{active_task}</p>
        <p className="badge_subtitle-done">completed</p>
      </>
    );
  }
  return (
    <>
      <img src={inactive_badge} className="badge_image"/>
      <p className="badge_title">{task}</p>
      <p className="badge_subtitle">keep going</p>
    </>
  );
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      subscription: null,
      badges: [],
      rewards: [],
      active_badges: []
     };
  }

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");

    axios
      .get("http://104.248.114.51:8000/user_subscription/get_subscription/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ subscription: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });

      axios
      .get("http://104.248.114.51:8000/profile/badges/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ badges: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });

      axios
      .get("http://104.248.114.51:8000/profile/badges/get_active_badges/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ active_badges: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });

      axios
      .get("http://104.248.114.51:8000/profile/rewards/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ rewards: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });
  }

  render() {
    console.log(localStorage.getItem("token"));
    console.log(this.state.subscription);
    // console.log(active_badges, "moonlihght");
    const { subscription } = this.state;
    const { badges } = this.state;
    const { rewards } = this.state;
    const { active_badges } = this.state;
    console.log(active_badges, "moonlihght");
    return (
      <>
        <div className="profile_container">
        <div>
        {subscription && (
          <div className="subscription_container" key={subscription.id}>
             <h1 className="subscription-container_title">Subscription for: {subscription.user.email}</h1>
            <div className="subscription_content">
              <div className="subscription_details">
                <table>
                  <tr>
                    <th className="subscription_info__title">
                      Subscription Type:
                    </th>
                    <td className="subscription_info">
                      {subscription.subscription.name}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">Description:</th>
                    <td className="subscription_info">
                      {subscription.subscription.description_full}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">Price:</th>
                    <td className="subscription_info">
                      {subscription.subscription.price}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">Discount:</th>
                    <td className="subscription_info">
                      {subscription.subscription.discount}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">Active:</th>
                    <Active>{subscription.subscription.is_active}</Active>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">Days:</th>
                    <td className="subscription_info">
                      {subscription.subscription.days}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">
                      Subscription start date:
                    </th>
                    <td className="subscription_info">
                      {subscription.start_date}
                    </td>
                  </tr>
                  <tr>
                    <th className="subscription_info__title">
                      Subscription end date:
                    </th>
                    <td className="subscription_info">
                      {subscription.end_date}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="buttons">
            <button className="profile_button">
              <NavLink
                className="empty-button__text"
                to="/main/module_lessons/get_modules"
              >
                start studying
              </NavLink>
            </button>
          </div>
            </div>
          </div>
        )}
      </div>
      <>
          <div className="badges_container">
            <h2 className="achievements">Achievements</h2>
            { active_badges.map((badge) =>
              <Badge completed={badge.completed} id={badge.badge.id} task={badge.badge.task}/>
            )}
          </div>
        </>
          <div className="badges_container">
          <h2 className="achievements">Rewards</h2>
          { rewards.map((reward) => 
            <div className="badge" key={reward.id}>
            <img src={prize} className="badge_image"/>
            <p className="prize_title">Congratulations!</p>
            <p className="prize_subtitle">{reward.reward.text}</p>
            </div>
          )}
          </div>
        </div>
      </>
    );
  }
}

export default Profile;


