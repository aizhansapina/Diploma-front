import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Speaking.scss";

const Speaking = (props) => {
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
            <button className="title_box">Speaking Modul # & Lesson #</button>
            <NavLink className="button__add-quiz__link" to="/main/task/">
              <button className="button__add-quiz">
                Take Quiz for section
              </button>
            </NavLink>
          </div>
          <div className="main_content">
            <div className="speaking_title">
              <h3 className="content_title">PArt 1</h3>
              <p className="content_description">Introduction and Interview</p>
            </div>
            <div className="introduction_text">
              <div className="question_cont">
                <button className="question_circle-button">1</button>
                <p className="speaking_question">Moving on to Food, let's talk about food. What kind of food do you like?</p>
              </div>
              <div className="question_cont">
                <button className="question_circle-button">2</button>
                <p className="speaking_question">What are typical foods in your country?</p>
              </div>
              <div className="question_cont">
                <button className="question_circle-button">3</button>
                <p className="speaking_question">Is cooking a man's or woman's job?</p>
              </div>
              <div className="question_cont">
                <button className="question_circle-button">4</button>
                <p className="speaking_question">How do you like foreign food?</p>
              </div>
            </div>
            <div className="speaking_title">
              <h3 className="content_title">PArt 2</h3>
              <p className="content_description">Topic</p>
            </div>
            <div className="introduction_text">
            <div className="question_cont"> 
              <button className="question_circle-button">1</button>
              <p className="speaking_question">Describe a well-paid job you would like to do/you will be good at in the future. You should say: what the job is what qualifications are required for this job how this job is different than other jobs and explain why you would like to be good at this job.</p>
            </div>
            </div>
            <div className="speaking_title">
              <h3 className="content_title">PArt 3</h3>
              <p className="content_description">Topic Discussion</p>
            </div>
            <div className="introduction_text">
            <div className="question_cont">
            <button className="question_circle-button">1</button>
              <p className="speaking_question">What kind of jobs are poorly-paid in your country?</p>
            </div>
            <div className="question_cont">
              <button className="question_circle-button">2</button>
              <p className="speaking_question">Do people who have different levels of income feel happy about how much they earn?</p>
            </div>
            <div className="question_cont">
              <button className="question_circle-button">3</button>
              <p className="speaking_question">Do you think it is good to change jobs frequently?</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Speaking;
