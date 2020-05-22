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
          <div className = "speaking-content_container">
          <div className="content_title">
          Grammar for IELTS
            <div className="content_description">
            In the IELTS test, Grammar is awarded a separate band score in both the Speaking and Writing modules. You are assessed on your ability to use correct and appropriate grammar and on the range of sentence types that you produce. Even simple sentences need to be written accurately but in order to raise your score above Band 4, you also need to be able to show that you can use some complex sentence types and have an understanding of the relevant tenses and structures.
            </div>
            <div>
      </div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Grammar;
