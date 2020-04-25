import React from "react";
import { NavLink } from "react-router-dom";

import shop from "../../../images/menu-lines.png";
import search from "../../../images/magnifying-glass.png";
import profile_white from "../../../images/account-white.png";

import "./Header.scss";

export default function Header(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div className="Header">
      <nav className="Nav-left">
        <NavLink
          exact
          className="Nav__link"
          to="/main/subscriptions/get_subscriptions/"
        >
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
      { !isLoggedIn ?
        <NavLink className="Nav__account" to="/auth/users/login/">
        sign in
        <div className="dropdown">
          <NavLink className="dropdown__item" to="/auth/register/">
            Create account
          </NavLink>
          <NavLink className="dropdown__item" to="/auth/users/login/">
            Login
          </NavLink>
        </div>
      </NavLink> :
      <NavLink className="Nav__account" to="/auth/users/login/">
      log out 
      </NavLink>
       } 
       { isLoggedIn && (
         <NavLink exact className="Nav__link-right" to="/main/profile">
         <img src={profile_white} alt={profile_white} className="Nav__img" />
       </NavLink>
       )}
      </div>
    </div>
  );
}
