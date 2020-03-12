import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../store/actions/cartActions";

import "../../shared/header/Header-shop.scss";
import "./Main.scss";

class Main extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="Product__column" key={item.id}>
          {/* <img src={item.img} alt={item.title} className="Product__img" /> */}
          <div className="Product__img">
            <span className="Product__name">{item.title}</span>
            <p className="Product__list">- Lorem Inpsum</p>
            <p className="Product__list">- Lorem Inpsum</p>
            <p className="Product__list">- Lorem Inpsum</p>
            <p className="Product__list">- Lorem Inpsum</p>
          </div>
          <div className="Product__description">
            <p className="Product__title">{item.title}</p>
            <p className="Product__price">{item.price}₸</p>
            <button
              className="to-cart"
              onClick={() => {
                this.handleClick(item.id);
              }}
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
          <h1 className="Register-button__title">Do you want a demo lesson?</h1>
          <button className="Product__button">
            {/* <span className="button__text">register first</span> */}
            <NavLink className="button__text" to="/auth/register">
              Register first
            </NavLink>
          </button>
        </div>
        <div className="Product__row">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
