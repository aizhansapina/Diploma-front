import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";
import Input from "../shared/input/Input";

import "./Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
  }

  componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");
  }

  render() {
    console.log("state", this.state);
    const { answers } = this.state;
    return (
      <div className="question-content">
        <h3 className="question_below_description">
          Questions below description
        </h3>
        <div className="question">
          <table>
            <p className="question_description">Question description</p>
            <tr>
              <td className="question_name">Question</td>
              <td>
                <div className="form__input">
                  <button className="question_circle-button">1</button>
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
    );
  }
}
export default Question;
