import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";

import "../../components/shared/header/Header.scss";
import "./Moduls.scss";

const ActivatedTime = ({ activated_time }) => {
  if (!activated_time) {
    return <p className="lesson_button__text--red">Press To Activate</p>;
  }
  return (
    <p className="lesson_button__text">Activated Time: {activated_time}</p>
  );
};

const PreviousLessons = ({ previous_lesson }) => {
  if (!previous_lesson) {
    return <p className="lesson_button__text">No Previous Lessons</p>;
  }
  return (
    <p className="lesson_button__text">Previous Lessons: {previous_lesson}</p>
  );
};

class Moduls extends Component {
  constructor(props) {
    super(props);
    this.state = { moduls: [] };
  }

  handleClick = (moduleId, lessonId) => {
    fetch(
      "http://104.248.114.51:8000/user_module/module/" + moduleId + "/lesson/" + lessonId + "/activate_lesson/",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "JWT " + sessionStorage.getItem("token"),
        },
        method: "POST"
      }
    )
      .then(
        (response) => response.text(),
        // this.props.history.push("/main/profile")
      )
      .then((responseText) => {
        alert(responseText);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");

    axios
      .get("http://104.248.114.51:8000/module_lessons/get_modules/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        console.log(sessionStorage.getItem("token"));
        console.log(response.data);
        this.setState({ moduls: response.data });
      })
      .catch((error) => {
        console.log("error" + error.response.data);
      });
  }

  render() {
    console.log("state", this.state);
    const { moduls } = this.state;
    let modulList = moduls.map((modul) => {
      return (
        <div className="modul" key={modul.id}>
          <h3 className="modul_title" key={modul.module.id}>
            {modul.module.name}
          </h3>
          <div className="modul_lessons">
            {modul.lessons.map((lessons) => (
              <NavLink className="navlink" to="/main/listening">
                <button className="lesson_button" key={lessons.id}>
                  {lessons.name}
                  {!lessons.activated_time ? 
                  <p className="lesson_button__text--red" onClick={() => { this.handleClick(modul.module.id, lessons.id);}}>
                  Press To Activate</p> : 
                <p className="lesson_button__text">Activated Time: {lessons.activated_time}</p>}
                  <PreviousLessons previous_lesson={modul.previous_lesson} />
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="moduls_content">
          <div className="moduls__student_info">
            <h1 className="student_info-fullname">
              Name Surname (Standard/ Premium/ VIP)
            </h1>
            <h2 className="student_info-moduls">Left: # days</h2>
            <h2 className="student_info-moduls">Current: Module # Lesson #</h2>
            <h2 className="student_info-moduls">
              Next Lesson after: hours/minutes/seconds
            </h2>
          </div>
          <div className="moduls_list">{modulList}</div>
        </div>
      </div>
    );
  }
}
export default Moduls;
