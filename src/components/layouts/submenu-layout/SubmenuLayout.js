import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import listening from "../../../images/listening-neon.png";
import reading from "../../../images/reading-neon.png";
import writing from "../../../images/writing-neon.png";
import speaking from "../../../images/speaking-neon.png";
import tips from "../../../images/tips-neon.png";

import "./SubmenuLayout.scss";

class SubmenuLayout extends Component {
  render() {
    return (
      <Fragment>
        <div className="Submenu_layout">
          <NavLink className="sudmenu_link" to="/main/listening">
            <img src={listening} alt={listening} className="submenu__img" />
            <p className="submenu_title">listening</p>
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/reading">
            <img src={reading} alt={reading} className="submenu__img" />
            <p className="submenu_title">reading</p>
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/speaking">
            <img src={speaking} alt={speaking} className="submenu__img" />
            <p className="submenu_title">speaking</p>
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/writing">
            <img src={writing} alt={writing} className="submenu__img" />
            <p className="submenu_title">writing</p>
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/grammar">
            <img src={tips} alt={tips} className="submenu__img" />
            <p className="submenu_title">bonus tips</p>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default SubmenuLayout;
