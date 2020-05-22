import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Video.scss";
import ReactPlayer from 'react-player';
const Video = (props) => {
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
        <div className="grammar-containe">
          <div className="student_data">
            <h1 className="student_name">{props.name}</h1>
            <div className="course_data">
              <p className="day">{props.days}</p>
              <p className="next_lesson">{props.lesson}</p>
              <h2 className="module">{props.module}</h2>
            </div>
          </div>
          <div className="grammarrr">
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
          IELTS video lessons and tips
            <div className="content_description-video">
            Prepare for the IELTS test with our video lessons that give you an explanation of the test and also tips, strategies and advice to improve your chances of success in IELTS.

They explain the aspects of fluency and coherence, lexis and vocabulary, grammar and pronunciation that are considered during assessment.
            </div>
            <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=Zx-JcXsbUqQ'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>
          </div>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Video;
