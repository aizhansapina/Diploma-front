import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../store/actions/cartActions";

import "../../shared/header/Header-shop.scss";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      subscriptions: [],
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    this.setState({
      isLoggedIn: Boolean(token),
    });

    const url = "http://104.248.114.51:8000/subscriptions/get_subscriptions/";
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.setState({ subscriptions: data });
        console.log(this.state.isLoggedIn);
        console.log(sessionStorage.getItem("token"));
        console.log(this.state.subscriptions);
      });
  }

  handleClick = (id, paid_amount) => {
    console.log("POMOGIIITE", id);
    fetch(
      "http://104.248.114.51:8000/subscriptions/" +
        id +
        "/add_user_subscription/",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "JWT " + sessionStorage.getItem("token"),
        },
        method: "POST",
        body: JSON.stringify({ paid_amount: paid_amount }),
      }
    )
      .then(
        (response) => response.text(),
        this.props.history.push("/main/profile")
      )
      .then((responseText) => {
        alert(responseText);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  onRegisterClick = () => this.props.history.push("/auth/register/");

  render() {
    console.log("wtf");
    const { isLoggedIn, subscriptions } = this.state;
    let itemList = subscriptions.map((item) => {
      return (
        <div className="Product__column" key={item.id}>
          {/* <img src={item.img} alt={item.title} className="Product__img" /> */}
          <div className="Product__img">
            <span className="Product__name">{item.name}</span>
            <p className="Product__list">{item.description_full}</p>
            <p className="Product__list">DISCOUNT: {item.discount}</p>
            <p className="Product__list">DAYS: {item.days}</p>
          </div>
          <div className="Product__description">
            <p className="Product__title">{item.title}</p>
            <p className="Product__price">{item.price}₸</p>
            <button
              className="to-cart"
              onClick={() => {
                this.handleClick(item.id, item.price);
              }}
              disabled={!isLoggedIn}
            >
              get now
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          {/* <h1 className="Register-button__title">Do you want a demo lesson?</h1> */}
          {!isLoggedIn && (
            <button onClick={this.onRegisterClick} className="Product__button">
              <NavLink className="button__text" to="/auth/register/">
                Register to get the course
              </NavLink>
            </button>
          )}
        </div>
        <div className="Product__row">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
