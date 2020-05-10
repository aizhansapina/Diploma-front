import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";
import Input from "../shared/input/Input";

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
    this.state = { quiz: "" };
  }

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");

    axios
      .get(
        "http://104.248.114.51:8000/module/1/lesson/1/section/READING/get_quiz/",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log("success");
        console.log(sessionStorage.getItem("token"));
        // console.log(response.data);
        this.setState({ quiz: response.data });
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }

  render() {
    console.log("state", this.state);
    const { quiz } = this.state;
    let keys = [];
    if (this.state.quiz !== null) {
        keys = Object.keys(this.state.quiz);
    }
    let quizID = ""
    let quizDescription = ""
    let questionList = [];
    keys.map(ques => {
      console.log('POLO',this.state.quiz[ques].questions)
      quizID = this.state.quiz[ques].id
      quizDescription = this.state.quiz[ques].description
      questionList = this.state.quiz[ques].questions.map((item) => {
        console.log("AZEM", item)
        return (
          <div className="question-content" key={item.id}>
            <h3 className="question_below_description">
              {item.question_type}
            </h3>
            <div className="question">
              <table>
                <p className="question_description">{item.description}</p>
                <tr>
                  <td className="question_name">{item.body_text}</td>
                  <td>
                    <div className="form__input">
                      <button className="question_circle-button">
                        {item.id}
                      </button>
                      <Input
                        name="answer"
                        type="text"
                        // onChange={this.setFormField}
                        className="answer__input"
                        placeholder="Answer"
                        autocomplete="off"
                      />
                      <span className="form__underline"></span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        )
      })
      
    })

    return (
      <div>
        <div className="quiz-container">
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
          <div className="quiz-content" key={quizID}>
            <button className="title_box">{quizDescription}</button>
            <div className="question-content">{questionList}</div>
            <button type="submit" className="form__button">
              SUBMit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Quiz;
