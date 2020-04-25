import React, { Component } from "react";
import axios from "axios";
import Header from "../shared/header/Header.js";

import "../../components/shared/header/Header.scss";
import "./UserSubscription.scss";

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

class UserSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = { subscription: null };
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
        // console.log(response.data);
        this.setState({ subscription: response.data });
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }

  render() {
    console.log(this.state.subscription);
    const { subscription } = this.state;
    return (
      <div>
        <Header />
        <div className="subscription_container" key={subscription.id}>
          <h1 className="container_title">
            Subscription for: {subscription.user.full_name}
          </h1>
          <div className="subscription_content">
            <div
              className="subscription_details"
              key={subscription.subscription.id}
            >
              <table>
                <tr>
                  <th className="subscription_info__title">
                    Subscription Type:
                  </th>
                  <td className="subscription_info">
                    {subscription.subscription.name}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">Description:</th>
                  <td className="subscription_info">
                    {subscription.subscription.description_full}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">Price:</th>
                  <td className="subscription_info">
                    {subscription.subscription.price}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">Discount:</th>
                  <td className="subscription_info">
                    {subscription.subscription.discount}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">Active:</th>
                  <td className="subscription_info">
                    {subscription.subscription.is_active}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">Days:</th>
                  <td className="subscription_info">
                    {subscription.subscription.days}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">
                    Subscription start date:
                  </th>
                  <td className="subscription_info">
                    {subscription.start_date}
                  </td>
                </tr>
                <tr>
                  <th className="subscription_info__title">
                    Subscription end date:
                  </th>
                  <td className="subscription_info">{subscription.end_date}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserSubscription;
