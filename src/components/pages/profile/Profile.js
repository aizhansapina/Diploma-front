import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import active_badge from "../../../images/organization.png";
import inactive_badge from "../../../images/date.png";
import prize from "../../../images/award.png";

import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="profile_container">
          <div className="buttons">
            <button className="profile_button">
              <NavLink
                className="empty-button__text"
                to="/main/module_lessons/get_modules"
              >
                start studying
              </NavLink>
            </button>
            <button className="profile_button">
              <NavLink
                className="empty-button__text"
                to="/main/user_subscription/get_subscription/"
              >
                see my subscription details
              </NavLink>
            </button>
          </div>
          <div className="badges_container">
            <div className="badge">
              <img src={active_badge} className="badge_image"/>
              <p className="badge_title">5 lessons in 5 days in a row</p>
              <p className="badge_subtitle-done">completed</p>
            </div>
            <div className="badge">
              <img src={active_badge} className="badge_image"/>
              <p className="badge_title">Maximum points in 3 tasks</p>
              <p className="badge_subtitle-done">completed</p>
            </div>
            <div className="badge">
              <img src={inactive_badge} className="badge_image"/>
              <p className="badge_title">10 lessons in 10 days in a row</p>
              <p className="badge_subtitle">keep going</p>
            </div>
            <div className="badge">
              <img src={inactive_badge} className="badge_image"/>
              <p className="badge_title"> 6.0 points in academic test</p>
              <p className="badge_subtitle">keep going</p>
            </div>
            <div className="badge">
              <img src={inactive_badge} className="badge_image"/>
              <p className="badge_title">7.0 points in academic test</p>
              <p className="badge_subtitle">keep going</p>
            </div>
          </div>
          <div className="badges_container">
          <div className="badge">
          <img src={prize} className="badge_image"/>
          <p className="prize_title">Congratulations!!!</p>
          <p className="prize_subtitle">10% discount to next training test</p>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
