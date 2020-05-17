import React, { Component } from "react";
import axios from "axios";

import "../../components/shared/header/Header.scss";
import "./UserSubscription.scss";

const Active = ({ is_active }) => {
  if (!is_active) {
    return <td className="subscription_info">not active</td>;
  }
  return <td className="subscription_info">{is_active}</td>;
};

const SubscriptionOwner = ({ full_name }) => {
  if (!full_name) {
    return <h1 className="container_title">Subscription for you</h1>;
  }
  return <h1 className="container_title">Subscription for: {full_name}</h1>;
};

const Subscription = ({ id }) => {
  if (!id) {
    return <h1 className="container_title">no Subscription</h1>;
  }
  return <div className="subscription_container" key={id} />;
};

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
    console.log(localStorage.getItem("token"));
    console.log(this.state.subscription);
    const { subscription } = this.state;
    return (
      <div>
        {subscription && (
          <div className="subscription_container" key={subscription.id}>
            <SubscriptionOwner>{subscription.user.full_name}</SubscriptionOwner>
            <div className="subscription_content">
              <div className="subscription_details">
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
                    <Active>{subscription.subscription.is_active}</Active>
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
                    <td className="subscription_info">
                      {subscription.end_date}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default UserSubscription;
