import React from "react";
import { NavLink } from "react-router-dom";

import logo_pink from "../../../images/kylie-logo-pink.png";
//import ielts_logo from "../../../images/ielts_logo";
import shop_black from "../../../images/maenu-lines-black.png";
import search_black from "../../../images/search-black.png";
import cart_black from "../../../images/shopping-bag-black.png";

import "./Header.scss";

export default function Header() {
  return (
    <div className="Header-shop">
      <nav className="Nav-left">
        <NavLink exact className="Nav__link" to="/main/shop">
          <img src={shop_black} alt={shop_black} className="Nav__img" />
        </NavLink>
        <NavLink className="Nav__link" to="/home">
          <img src={search_black} alt={search_black} className="Nav__img" />
        </NavLink>
      </nav>
      <NavLink className="Header__logo" to="/home">
        {/* <img src={ielts_logo} alt={ielts_logo} className="logo" /> */}
        <span className="Header__title">IELTS ACADEMY</span>
      </NavLink>
      <div className="Nav-right">
        <NavLink className="Nav__account-black" to="/auth/login">
          my account
          <div class="dropdown">
            <NavLink class="dropdown__item" to="/auth/register">
              Create account
            </NavLink>
            <NavLink class="dropdown__item" to="/auth/login">
              Login
            </NavLink>
          </div>
        </NavLink>
        <NavLink exact className="Nav__link-right" to="/main/mycart">
          <img src={cart_black} alt={cart_black} className="Nav__img" />
        </NavLink>
      </div>
    </div>
  );
}
