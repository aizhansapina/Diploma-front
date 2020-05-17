import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Reading.scss";
import { Component } from "react";
import axios from "axios";

class Reading extends Component {
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
        console.log("success");
        this.setState({ subscription: response.data });
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
            <h2 className="student_info-moduls">Current: Module 1 Lesson 1</h2>
          </div>
        </div>
        )
      }
        
      </div>
      <Submenu />
      <div className="Reading">
        <div className="container">
          <div className="unknown">
            <button className="title_box">Reading Modul 1 & Lesson 1</button>
            <NavLink className="button__add-quiz__link" to="/main/task/">
              <button className="button__add-quiz">
                Do The task for the lesson
              </button>
            </NavLink>
          </div>
          <div className="main_content">
            <h3 className="content_title">The Concept of Childhood in Western Countries</h3>
            <p className="content_description">You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below.</p>
            <div className="content_image"></div>
            <div className="introduction_text">
              The history of childhood has been a heated topic in social history since the highly 
              influential book Centuries of Childhood’, written by French historian Philippe Aries, 
              emerged in 1960. He claimed that ‘childhood’ is a concept created by modern society.
              Whether childhood is itself a recent invention has been one of the most intensely debated
               issues in the history of childhood. Historian Philippe Aries asserted that children were 
               regarded as miniature adults, with all the intellect and personality that this implies, 
               in Western Europe during the Middle Ages (up to about the end of the 15th century). 
               After scrutinising medieval pictures and diaries, he concluded that there was no distinction 
               between children and adults for they shared similar leisure activities and work; 
               However, this does not mean children were neglected, forsaken or despised, he argued. 
               The idea of childhood corresponds to awareness about the peculiar nature of childhood, 
               which distinguishes the child from adult, even the young adult. 
               Therefore, the concept of childhood is not to be confused with affection for children.
               Traditionally, children played a functional role in contributing to the family income in the history. 
               Under this circumstance, children were considered to be useful. 
               Back in the Middle Ages, children of 5 or 6 years old did necessary chores for their parents. 
               During the 16th century, children of 9 or 10 years old were often encouraged or even forced to leave 
               their family to work as servants for wealthier families or apprentices for a trade.
               In the 18th and 19th centuries, industrialisation created a new demand for child labour; 
               thus many children were forced to work for a long time in mines, workshops and factories. 
               The issue of whether long hours of labouring would interfere with children’s growing bodies 
               began to perplex social reformers. Some of them started to realise the potential of systematic 
               studies to monitor how far these early deprivations might be influencing children’s development.
               The concerns of reformers gradually had some impact upon the working condition of children. 
               For example, in Britain, the Factory Act of 1833 signified the emergence of legal protection 
               of children from exploitation and was also associated with the rise of schools for factory children. 
               Due partly to factory reform, the worst forms of child exploitation were eliminated gradually. 
               The influence of trade unions and economic changes also contributed to the evolution by 
               leaving some forms of child labour redundant during the 19th century. 
               Initiating children into work as ‘useful’ children was no longer a priority, 
               and childhood was deemed to be a time for play and education for all children 
               instead of a privileged minority. Childhood was increasingly understood as a more extended 
               phase of dependency, development and learning with the delay of the age for starting full-time 
               ork- Even so, work continued to play a significant, if less essential, role in children’s lives in 
               the later 19th and 20th centuries. Finally, the ‘useful child’ has become a controversial 
               concept during the first decade of the 21st century, especially in the context of global concern about 
               large numbers of children engaged in child labour.
            </div>
            {/* <div className="Question">
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
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );

  }
}

export default Reading;