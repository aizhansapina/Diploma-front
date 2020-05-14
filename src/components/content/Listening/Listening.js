import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Listening.scss";
import { Component } from "react";
import axios from "axios";

class Listening extends Component {
  constructor(props) {
    super(props);
    this.state = {
       subscription: "" 
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
        console.log("success AAA");
        this.setState({ subscription: response.data });
        console.log("hey", response.data)
        console.log("DAUKA",this.state.subscription.id)
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });
  }

  render() {
    console.log("state", this.state);
    const { subscription } = this.state;
    var date1 = new Date(subscription.end_date); 
    var date2 = new Date(subscription.start_date);
    const diffTime = Math.abs(date2 - date1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

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
            <h2 className="student_info-moduls">Current: Module # Lesson #</h2>
          </div>
        </div>
        )
      }
        
      </div>
      <Submenu />
      <div className="Listening">
        <div className="container">
          <div className="unknown">
            <button className="title_box">Listening Modul # & Lesson #</button>
            <NavLink className="button__add-quiz__link" to="/main/add-quiz/">
              <button className="button__add-quiz">
                Take Quiz for section
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
            <div className="Question">
              <audio className="listen" controls></audio>
              <div className="types">
                <p className="question_types_title">
                  Types of questions. Listening
                </p>
                <ul className="question_list">
                  <li className="question">Form completion</li>
                  <li className="question">Note completion</li>
                  <li className="question">Table completion</li>
                  <li className="question">Flow-chart completion</li>
                  <li className="question">Plan labeling</li>
                  <li className="question">Map labeling</li>
                  <li className="question">Diagram labeling</li>
                  <li className="question">Matching</li>
                  <li className="question">Multiple choices</li>
                  <li className="question">Sentence completion</li>
                  <li className="question">Short answer question</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );

  }
}

export default Listening;
