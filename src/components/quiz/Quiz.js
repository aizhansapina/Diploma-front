import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";
import Question from "../question/Question";

import "./Quiz.scss";

// const ActivatedTime = ({ activated_time }) => {
//   if (!activated_time) {
//     return <p className="lesson_button__text--red">Press To Activate</p>;
//   }
//   return (
//     <p className="lesson_button__text">Activated Time: {activated_time}</p>
//   );
// };

// const PreviousLessons = ({ previous_lesson }) => {
//   if (!previous_lesson) {
//     return <p className="lesson_button__text">No Previous Lessons</p>;
//   }
//   return (
//     <p className="lesson_button__text">Previous Lessons: {previous_lesson}</p>
//   );
// };

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { moduls: [] };
  }

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
    return (
      <div className="quiz-container">
        <h1>Quiz creation</h1>
        <div className="quiz-content">
          <label className="select_section" for="section">
            Select section for quiz:
          </label>
          <select className="select_dropdown" id="section">
            <option className="select_option" value="listening">
              listening
            </option>
            <option value="reading">reading</option>
            <option value="writing">writing</option>
            <option value="speaking">speaking</option>
          </select>
        </div>
        <Question />
      </div>
    );
  }
}
export default Quiz;
