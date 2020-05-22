import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import { Component } from "react";
import axios from "axios";
import Input from "../../shared/input/Input";
import "../../quiz/Quiz.scss";
import "./Writing.scss";

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
       moduleId: sessionStorage.getItem("moduleID"),
       lessonId: sessionStorage.getItem("lessonID"),
       subscription: "",
       lesson_detail: ""
      };
  }

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");

      axios
      .get("http://104.248.114.51:8000/user_subscription/get_subscription/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ subscription: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });

      axios
      .get("http://104.248.114.51:8000/module/"+ this.state.moduleId +"/lesson/"+ this.state.lessonId +"/section/WRITING/get_lesson_detail/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success lesson");
        this.setState({ lesson_detail: response.data });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });
  }

  handleClick = () => {
    sessionStorage.setItem("boardId", 3)
    this.props.history.push("/main/leaderboard/")
  }

  render() {
    console.log("state", this.state);
    const { subscription } = this.state;
    const { lesson_detail } = this.state;
    var date1 = new Date(subscription.end_date); 
    var date2 = new Date(subscription.start_date);
    const diffTime = Math.abs(date2 - date1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log("help", lesson_detail.block)
    let keys = [];
    if (this.state.lesson_detail !== null) {
      keys = Object.keys(this.state.lesson_detail)
      console.log("keys", keys)
    }
    let lessons = []
    keys.map(item => {
      console.log(item)
      lessons = lesson_detail["block"]
    })
    return (
    <Fragment>
      <div> { 
        subscription && (
          <div className="moduls_content">
          <div className="moduls__student_info">
            <h1 className="student_info-fullname">
            Student: { subscription.user.full_name }
            </h1>
            <h2 className="student_info-moduls">
            subscription: {subscription.subscription.description_short}
            </h2>
            <h2 className="student_info-moduls">Left: {diffDays} days</h2>
            <h2 className="student_info-moduls">Current: Module 1 Lesson 1</h2>
          </div>
        </div>
        )
      }
      </div>
      <Submenu />
      <div className="Speaking">
      {
        lesson_detail && (
        <div className="container">
          <div className="speaking-content_container">
          <button className="title_box_speaking">{lesson_detail.section_type} {lesson_detail.module_lesson.module.name} {lesson_detail.module_lesson.lesson.name}</button>
          {lesson_detail.content.map((item) => (
          <div className="speaking-main_content">
            <h3 className="content_title">{item.title}</h3>
            <p className="content_description">{item.description}</p>
            <img src={item.url} className="content_img"/>
            <div className="speaking-introduction_text">{item.text.replace(/[\r\n]+/g, "\n")}</div>
          </div>
          ))}
            <button type="submit" className="form__button" onClick = {this.handleClick}>
                Upload my answer
            </button>
          </div>
        </div>
        )
      }
      </div>
    </Fragment>
  );

  }
}

export default Writing;