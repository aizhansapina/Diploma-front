import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";

import "./Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], act: 0, index: "" };
  }

  addAnswer = (e) => {
    e.preventDefault();
    let answers = this.state.answers;
    let name = this.refs.name.value;

    if (this.state.act === 0) {
      let data = {
        name,
      };
      answers.push(data);
    } else {
      let index = this.state.index;
      answers[index].name = name;
    }

    this.setState({
      answers: answers,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");

    // axios
    //   .get("http://104.248.114.51:8000/module_lessons/get_modules/", {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("success");
    //     console.log(sessionStorage.getItem("token"));
    //     console.log(response.data);
    //     this.setState({ moduls: response.data });
    //   })
    //   .catch((error) => {
    //     console.log("error" + error.response.data);
    //   });
  }

  render() {
    console.log("state", this.state);
    const { answers } = this.state;
    return (
      <div className="question-creation">
        <h2>Add question</h2>
        <label className="select_label" for="section">
          Select question type:
        </label>
        <select className="select_type" id="section">
          <option value="form_completion">Form completion</option>
          <option value="nore_completion">Note completion</option>
          <option value="table_completion">Table completion</option>
          <option value="plan_labeling">Plan labeling</option>
          <option value="diagram_labeling">Diagram labeling</option>
          <option value="matching">Matching</option>
          <option value="multiple_choice">Multiple choices</option>
          <option value="sentence_completion">Sentence completion</option>
          <option value="short_answer">Short answer question</option>
          <option value="flow-chart_completion">Flow-chart completion</option>
        </select>
        <input
          placeholder="Add question description..."
          className="question__input"
        />
        <div list={answers}>
          <form ref="myForm" className="answer" onSubmit={this.addAnswer}>
            <input
              placeholder="Add answer..."
              className="question__answer_input"
            />
            <input
              className="checkbox"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
          </form>
          <form ref="myForm" className="answer" onSubmit={this.addAnswer}>
            <input
              placeholder="Add answer..."
              className="question__answer_input"
            />
            <input
              className="checkbox"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
          </form>
          <button
            className="answer__more_button"
            ref="myForm"
            onSubmit={this.addAnswer}
          >
            add more answers
          </button>
        </div>
        <button className="question__add-bbutton">Add question</button>
      </div>
    );
  }
}
export default Question;
