import React, { Component } from 'react'
import "../leaderboard/Leaderboard.scss";
import axios from "axios";


class Leaderboard extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         boardId: sessionStorage.getItem("boardId"),
         students: []
      }
   }

   componentDidMount() {
    const token = "JWT " + sessionStorage.getItem("token");
     
      axios
      .get("http://104.248.114.51:8000/task/"+ this.state.boardId +"/get_leaderboard/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("success");
        this.setState({ students: response.data });
        console.log("success", response.data);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("issa bad request");
        }
        if (error) console.log("error: " + error.response.data);
      });
  }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, user, score, time } = student //destructuring
       return (
          <tr key={index}>
             <td>{index+1}</td>
             <td>{user.email}</td>
             <td>{score}</td>
             <td>{time}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = ["order", "email","score", "time"]
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Leaderboard</h1>
          <table id='students'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Leaderboard