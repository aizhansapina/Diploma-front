import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../../../store/actions/cartActions";

import delet from "../../../images/delete.png";
import up_arrow from "../../../images/up-arrow.png";
import down_arrow from "../../../images/down-arrow.png";

import "./Cart.scss";

class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <>
            <table className="Cart__items" key={item.id}>
              <thead className="Cart__head">
                <tr>
                  <th className="head__titles">Product</th>
                  <th className="head__titles">Name</th>
                  <th className="head__titles">Price</th>
                  <th className="head__titles">Quantity</th>
                  <th className="head__titles">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="Cart__row">
                  <td className="row-image">
                    <img
                      src={item.img}
                      alt={item.img}
                      className="product__image"
                    />
                  </td>
                  <td className="row-name">
                    <p className="product__name">{item.title}</p>
                  </td>
                  <td>
                    <span className="product__name">${item.price}</span>
                  </td>
                  <td className="quantity__col">
                    <div className="product__quantity">
                      <Link to="/main/mycart">
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
                    ></input> */}
                      <p className="quantity__text">{item.quantity}</p>
                      <Link to="/main/mycart">
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
                  </td>
                  <td>
                    <button
                      className="button__delete"
                      onClick={() => {
                        this.handleRemove(item.id);
                      }}
                    >
                      <img
                        src={delet}
                        alt={delet}
                        className="product__delete"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })
    ) : (
      <>
        <p className="cart-empty">is empty...</p>
        <button className="empty__button">
          <NavLink className="empty-button__text" to="/main/shop">
            go shop
          </NavLink>
        </button>
      </>
    );
    return (
      <div>
        <div className="Cart__container">
          <h5 className="Cart__title">your cart</h5>
          <div className="Cart">{addedItems}</div>
          <div className="Cart__footer">
            <div className="Cart__total">
              <p className="total-price">total: {this.props.total}$</p>
            </div>
            <button className="Cart__checkout">
              <NavLink className="checkout__text" to="/main/orders">
                checkout
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
