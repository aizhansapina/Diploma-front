import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./SandW.scss";

const SandW = (props) => {
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
        <div className="grammar-container">
          <div className="student_data">
            <h1 className="student_name">{props.name}</h1>
            <div className="course_data">
              <p className="day">{props.days}</p>
              <p className="next_lesson">{props.lesson}</p>
              <h2 className="module">{props.module}</h2>
            </div>
          </div>
          <div className="grammarrr">
            <NavLink className="button__add-quiz__link" to="/main/grammar/">
              <button className="button__to_bonus">Grammar Bonus</button>
            </NavLink>
            <NavLink className="button__add-quiz__link" to="/main/video/">
              <button className="button__to_bonus">Video Bonus</button>
            </NavLink>
            <NavLink
              className="button__add-quiz__link"
              to="/main/speaking-writing/"
            >
              <button className="button__add-quiz">
                Speaking&Writing Bonus
              </button>
            </NavLink>
          </div>
          <div className="feedback_section-sw">
            <button className="feedback">Speaking</button>
            <button className="feedback">Writing</button>
          </div>
          <div className="main_content-sw">
            <h3 classname="introduction_title">Recommendations</h3>
            <div>
              <p className="introduction_text">
                Student should send a recording after completing at least ten
                lessons.{" "}
              </p>
              <p className="introduction_text">
                Remember that you have to record all 3 parts of Speaking and:
              </p>
              <p className="introduction_text"> - use paragraphing</p>
              <p className="introduction_text">
                - speak at least 2 min, but do not exceed 3 min in Speaking Part
                2
              </p>
              <p className="introduction_text">
                - use synonyms (try to not repeat the same words)
              </p>
              <p className="introduction_text">
                - use different grammatical structures
              </p>
            </div>
            <div className="content">
              <div className="content_feedback">
                <span className="feedback_lesson-id">1)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">2)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">3)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">4)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">5)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">6)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">7)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">8)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">9)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_feedback">
                <span className="feedback_lesson-id">10)</span>
                <button className="feedback_select-button">Select file</button>
                <span className="feedback_selected-doc">
                  file *.doc selected
                </span>
                <button className="feedback_select-button">Select audio</button>
                <button className="feedback_select-button">
                  Send to teacher
                </button>
                <button className="feedback_select-button">Download</button>
                <button className="feedback_select-button">See result</button>
              </div>
              <div className="content_result">
                <p>Your approximate results</p>
                <div className="result_section">
                  <span classname="result_section-title">F/C</span>
                  <span classname="result_section-title">Gr/A</span>
                  <span classname="result_section-title">L/R</span>
                  <span classname="result_section-title">Pr</span>
                </div>
                <div className="result_grades">
                  <span>0.0</span>
                  <span>0.0</span>
                  <span>0.0</span>
                  <span>0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SandW;
