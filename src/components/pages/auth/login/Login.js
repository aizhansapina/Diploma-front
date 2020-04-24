import React, { Component } from "react";

import Input from "../../../shared/input/Input";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../../../services/auth";
import { authorize } from "../../../../store/actions/authActions";

import { validateEmail } from "../services/validation";

import "../../../shared/header/Header-shop.scss";

import "../register/Register.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorFields: {},
      fields: {
        email: "",
        password: "",
      },
    };
  }

  setFormField = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: value,
      },
    }));
  };

  validate = () => {
    const { fields } = this.state;
    const errorFields = {};

    if (!fields.email) {
      errorFields.email = "Email required";
    } else if (!validateEmail(fields.email)) {
      errorFields.email = "Email not valid";
    }

    if (!fields.password) {
      errorFields.password = "Fill password";
    }

    if (errorFields.email || errorFields.password) {
      this.setState({ errorFields });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    login(this.state.fields.email, this.state.fields.password)
      .then((response) => {
        console.log("SYMBAAT", localStorage.getItem("access_token"))
        console.log("AIZHAAAN", response.data.token)
        sessionStorage.setItem('token', response.data.token);
        console.log("HEY BOY", sessionStorage.getItem('token'))
        this.props.history.push("/main/subscriptions/get_subscriptions/");
      })
      .catch(console.error);
  };

  render() {
    const {
      fields: { email, password },
      errorFields: { email: emailError, password: passwordError },
    } = this.state;
    return (
      <div className="Register">
        <h2 className="Register__title">login</h2>
        <form onSubmit={this.handleSubmit} className="Register__form">
          <div className="form__input">
            <Input
              name="email"
              type="text"
              onChange={this.setFormField}
              className="input"
              placeholder="Email"
              autocomplete="off"
              value={email}
            />
            <span className="form__underline">{emailError}</span>
          </div>

          <div className="form__input">
            <Input
              name="password"
              type="password"
              value={password}
              onChange={this.setFormField}
              className="input"
              placeholder="Password"
              autocomplete="off"
            />
            <span className="form__underline">{passwordError}</span>
          </div>
          <button type="submit" className="form__button">
            sign in
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {
    authorize,
  })(Login)
);
