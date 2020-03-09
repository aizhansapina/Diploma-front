import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../images/kylie-logo.png";
import shop from "../../../images/menu-lines.png";
import search from "../../../images/magnifying-glass.png";
import cart from "../../../images/shopping-bag.png";

import "./Home.scss";
import "../../../components/shared/header/Header.scss";

export default function Home() {
  return (
    <div>
      <div className="Header">
        <nav className="Nav-left">
          <NavLink exact className="Nav__link" to="/main/shop">
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
            my account
            <div className="dropdown">
              <NavLink className="dropdown__item" to="/auth/register">
                Create account
              </NavLink>
              <NavLink className="dropdown__item" to="/auth/login">
                Login
              </NavLink>
            </div>
          </NavLink>
          <NavLink exact className="Nav__link-right" to="/main/mycart">
            <img src={cart} alt={cart} className="Nav__img" />
          </NavLink>
        </div>
      </div>
      <div className="banner">
        <div className="banner__content">
          <h1 className="banner__title">get your ielts course now</h1>
          <button className="banner__button">
            <NavLink className="button__text" to="/main/shop">
              go now
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
