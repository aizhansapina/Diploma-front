import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./SubmenuLayout.scss";

class SubmenuLayout extends Component {
  render() {
    return (
      <Fragment>
        <div className="Submenu_layout">
          <NavLink className="sudmenu_link" to="/main/listening">
            Listening
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/reading">
            Reading
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/speaking">
            Speaking
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/writing">
            Writing
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/grammar">
            Bonus (Vocab + Grammar)
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/video">
            Bonus (Video tips)
          </NavLink>
          <NavLink className="sudmenu_link" to="/main/speaking-writing">
            Speaking&Writing
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default SubmenuLayout;
