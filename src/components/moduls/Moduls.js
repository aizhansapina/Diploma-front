import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../shared/header/Header.js";

import shop from "../../images/menu-lines.png";
import search from "../../images/magnifying-glass.png";
import profile_white from "../../images/account-white.png";

import "../../components/shared/header/Header.scss";
import "./Moduls.scss";

class Moduls extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="moduls_content">
          <div className="moduls__student_info">
            <h1 className="student_info-fullname">
              Name Surname (Standard/ Premium/ VIP)
            </h1>
            <h2 classname="student_info-moduls">Left: # days</h2>
            <h2 classname="student_info-moduls">Current: Module # Lesson #</h2>
            <h2 classname="student_info-moduls">
              Next Lesson after: hours/minutes/seconds
            </h2>
          </div>
          <div className="moduls__list">
            <h3 className="modul_title">Modul #</h3>
            <div className="modul_lessons">
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
            </div>
          </div>
          <div className="moduls__list">
            <h3 className="modul_title">Modul #</h3>
            <div className="modul_lessons">
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
            </div>
          </div>
          <div className="moduls__list">
            <h3 className="modul_title">Modul #</h3>
            <div className="modul_lessons">
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
              <button className="lesson_button">Lesson #</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Moduls;
