import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Grammar.scss";

const Grammar = (props) => {
  return (
    <Fragment>
      <div className="student_info">
        <h1 className="student_info-fullname">
          Name Surname (Standard/ Premium/ VIP)
        </h1>
        <h2 className="student_info-moduls">Left: # days</h2>
        <h2 className="student_info-moduls">Current: Module # Lesson #</h2>
        <h2 className="student_info-moduls">
          Next Lesson after: hours/minutes/seconds
        </h2>
      </div>
      <Submenu />
      <div className="Writing">
        <div className="container">
          <div className="student_data">
            <h1 className="student_name">{props.name}</h1>
            <div className="course_data">
              <p className="day">{props.days}</p>
              <p className="next_lesson">{props.lesson}</p>
              <h2 className="module">{props.module}</h2>
            </div>
          </div>
          <div className="unknown">
            <NavLink className="button__add-quiz__link" to="/main/grammar/">
              <button className="button__to_bonus">Grammar Bonus</button>
            </NavLink>
            <NavLink className="button__add-quiz__link" to="/main/video/">
              <button className="button__to_bonus">Video Bonus</button>
            </NavLink>
            <NavLink
              className="button__add-quiz__link"
              to="/main/speaking-writing/"
            >
              <button className="button__add-quiz">
                Speaking&Writing Bonus
              </button>
            </NavLink>
          </div>
          <div className="main_content">
            <div className="introduction_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Grammar;
