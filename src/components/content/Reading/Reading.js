import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "../../layouts/submenu-layout/SubmenuLayout";
import "./Reading.scss";
import { Component } from "react";
import axios from "axios";
import Input from "../../shared/input/Input";
import "../../quiz/Quiz.scss";

const QuestionBlock = ({ question_type, options }) => {
  switch(question_type){
    case "READING MULTIPLE CHOICE QUESTIONS":
      return (
        options.map((option) =>
          <div className="reading_multiple">
          <div className="multiple_option">
            <input type="checkbox" id="option1" name="option" value="HZ" className="multiple_checkbox"/>
            <label for="option1" className="multuple_option_label">{option.text}</label>
          </div>
      </div>
        )
        
      );
      break;
    case "READING TRUE_FALSE_NOT_GIVEN":
      return <TrueFalseQuestionBlock options = {options}/>;
      break;
    default:
      return <p>defaulttt</p>;
  }
};

const TrueFalseQuestionBlock = ({ options }) => {
  return (
    <div className="reading_true_false">
      <select name="options" id="options">
        { options.map((option) =>
          <option value="">{option.text}</option>
        )}
      </select>
    </div>
  );
}

// const HeadingQuestionBlock = ({ questions }) => {
//   return (
//     <div className="reading_true_false">
//       <select name="options" id="options">
//         { options.map((option) =>
//           <option value="">{option.text}</option>
//         )}
//       </select>
//     </div>
//   );
// }

class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .get("http://104.248.114.51:8000/module/1/lesson/1/section/READING/get_lesson_detail/", {
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
    let headingMatchBlock = []
    keys.map(item => {
      console.log(item)
      lessons = lesson_detail["block"]
    })
    let lessonList = []
    lessons.map(item => {   
      lessonList[item.id] = item.questions.map(kil => {
        return(
          <div key={kil.id} className="question_types">
            <p className="question_description">{kil.description}</p>
            <p className="question_name">{kil.body_text}</p>
            <button className="question_circle-button">{kil.order}</button>
            {
              <QuestionBlock key={kil.id} question_type={kil.question_type} order={kil.order} body_text={kil.body_text} options={kil.options}/>
            }
          </div>
        )
      })
    })
    
    headingMatchBlock = lessons.filter(lesson => lesson.question_type == "READING MATCHING HEADING QUESTION").map(item => {
      return(
        <div key={item.id} className="question_types">
          {             
            item.questions.map(question => { 
              return(
                <div>
                  <button className="question_circle-button">{question.order}</button>
                  <p className="question_name">{question.body_text}</p>                  
                  <TrueFalseQuestionBlock options = {question.options}/>
                </div>
              )              
            })            
          }   
        </div>
      )
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
      <div className="Reading">
      {
        lesson_detail && (
        <div className="container">
          <div className="content_container">
          <button className="title_box_reading">{lesson_detail.section_type} {lesson_detail.module_lesson.module.name} {lesson_detail.module_lesson.lesson.name}</button>
          {lesson_detail.content.map((item) => (
          <div className="main_content">
            <h3 className="content_title">{item.title}</h3>
            <p className="content_description">{item.description}</p>
            <img src={item.url} className="content_img"/>
            <div className="reading-introduction_text">{item.text}</div>
          </div>
          ))}
          </div>
          <div className="task_container">
          <button className="title_box">Task</button>
            {lesson_detail.block.map( (block) => (
            <div className="question-content" key={block.id}>              
              <h3 className="question_below_description">{block.description}</h3>
              {/* <p className="content_description">{block.question_type}</p> */}
              <div className = "question">
                {
                 block.question_type != "READING MATCHING HEADING QUESTION" ? lessonList[block.id] : headingMatchBlock                 
                }
              </div>
            </div>
            ))}
              <button type="submit" className="form__button">
                SUBMit
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

export default Reading;