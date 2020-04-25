import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../../store/actions/cartActions";

import "./Profile.scss";

class Profile extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);
  };

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
            <table className="Cart__items" key={item.id}>
              <thead className="Cart__head">
                <tr>
                  <th className="head__titles">Product Name</th>
                  <th className="head__titles">Description</th>
                  <th className="head__titles">Price</th>
                  <th className="head__titles">Start date</th>
                  <th className="head__titles">Finish date</th>
                  <th className="head__titles">Days left</th>
                </tr>
              </thead>
              <tbody>
                <tr className="Cart__row">
                  <td className="row-image">
                    <p className="product__name">{item.title}</p>
                  </td>
                  <td className="row-name">
                    <p className="product__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </td>
                  <td>
                    <span className="product__name">${item.price}</span>
                  </td>
                  {/* <td className="quantity__col">
                    <div className="product__quantity">
                      <Link to="/main/profile">
                        <button
                          className="quantity-arrow"
                          onClick={() => {
                            this.handleSubtractQuantity(item.id);
                          }}
                        >
                          <img
                            src={down_arrow}
                            alt={down_arrow}
                            className="arrow__img"
                          />
                        </button>
                      </Link>
                      {/* <input
                      type="text"
                      className="quantity-input"
                      value={item.quantity}
                    ></input> 
                      <p className="quantity__text">{item.quantity}</p>
                      <Link to="/main/profile">
                        <button
                          className="quantity-arrow"
                          onClick={() => {
                            this.handleAddQuantity(item.id);
                          }}
                        >
                          <img
                            src={up_arrow}
                            alt={up_arrow}
                            className="arrow__img"
                          />
                        </button>
                      </Link>
                    </div>
                  </td>*/}
                  <td>
                    <span className="product__name">07/03/2020</span>
                  </td>
                  <td>
                    <span className="product__name">12/04/2020</span>
                  </td>
                  <td>
                    <span className="product__name">26 days</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })
    ) : (
      <>
        <p className="cart-empty">no subscriptions... pls choose one</p>
        <button className="empty__button">
          <NavLink
            className="empty-button__text"
            to="/main/subscriptions/get_subscriptions/"
          >
            go to main page
          </NavLink>
        </button>
      </>
    );
    return (
      <div>
        <div className="Cart__container">
          <h5 className="Cart__title">your subscription</h5>
          <button className="empty__button">
            <NavLink
              className="empty-button__text"
              to="/module_lessons/get_modules"
            >
              start studying
            </NavLink>
          </button>
          <button className="empty__button">
            <NavLink
              className="empty-button__text"
              to="/main/user_subscription/get_subscription/"
            >
              see my subscription details
            </NavLink>
          </button>
          <div className="Cart">{addedItems}</div>
          <div className="Cart__footer">
            {/* <div className="Cart__total">
              <p className="total-price">total: {this.props.total}$</p>
            </div> */}
            {/* <button className="Cart__checkout">
              <NavLink className="checkout__text" to="/main/orders">
                checkout
              </NavLink>
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
