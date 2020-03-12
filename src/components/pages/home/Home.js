import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../images/kylie-logo.png";
import shop from "../../../images/menu-lines.png";
import search from "../../../images/magnifying-glass.png";
import profile_white from "../../../images/account-white.png";

import "./Home.scss";
import "../../../components/shared/header/Header.scss";

export default function Home() {
  return (
    <div>
      <div className="Header">
        <nav className="Nav-left">
          <NavLink exact className="Nav__link" to="/main/page">
            <img src={shop} alt={shop} className="Nav__img" />
          </NavLink>
          <NavLink className="Nav__link" to="">
            <img src={search} alt={search} className="Nav__img" />
          </NavLink>
        </nav>
        <NavLink className="Header__logo" to="/home">
          {/* <img src={logo} alt={logo} className="logo" /> */}
          <span className="Header__title">IELTS ACADEMY</span>
        </NavLink>
        <div className="Nav-right">
          <NavLink className="Nav__account" to="auth/login">
            sign in
            <div className="dropdown">
              <NavLink className="dropdown__item" to="/auth/register">
                Create account
              </NavLink>
              <NavLink className="dropdown__item" to="/auth/login">
                Login
              </NavLink>
            </div>
          </NavLink>
          <NavLink exact className="Nav__link-right" to="/main/profile">
            <img src={profile_white} alt={profile_white} className="Nav__img" />
          </NavLink>
        </div>
      </div>
      <div className="banner">
        <div className="banner__content">
          <h1 className="banner__title">get your ielts course now</h1>
          <button className="banner__button">
            <NavLink className="button__text" to="/main/page">
              go now
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
