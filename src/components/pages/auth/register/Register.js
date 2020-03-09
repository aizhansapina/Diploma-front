import React, { Component } from "react";
import { Formik } from "formik";
import Input from "../../../shared/input/Input";

import { connect } from "react-redux";
import { authorize } from "../../../../store/actions/authActions";
import { register } from "../../../../services/auth";
import "../../../shared/header/Header-shop.scss";

import "./Register.scss";

class Register extends Component {
  state = {
    formError: ""
  };

  handleSubmit = values => {
    const { email, password } = values;

    register(email, password)
      .then(response => {
        this.props.authorize(email, response.data.token);
        if (this.props.authorize) {
          this.props.history.push("/main/mycart");
        }
      })
      .catch(error => {
        if (error.response) {
          this.setState({ formError: error.response.data.error });
        } else {
          this.setState({ formError: error.message });
        }
      });
  };

  validateForm = values => {
    const errors = {};

    const emailRegExp = new RegExp(
      [
        '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
        "[a-zA-Z]{2,}))$"
      ].join("")
    );

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegExp.test(values.email)) {
      errors.email = "Email must be valid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 8) {
      errors.password = "Password must be no shorter than 8 symbols";
    }

    if (!values.rePassword) {
      errors.rePassword = "Re-enter your password";
    } else if (values.password !== values.rePassword) {
      errors.rePassword = "Passwords don't match";
    }

    return errors;
  };

  renderForm = ({
    handleSubmit,
    handleChange,
    errors,
    setFieldTouched,
    touched
  }) => (
    <form onSubmit={handleSubmit} className="Register__form">
      <div className="form__input">
        <Input
          name="firstName"
          type="text"
          // label="Email"
          onChange={handleChange}
          className="input"
          placeholder="First Name"
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="lastName"
          type="text"
          // label="Email"
          className="input"
          onChange={handleChange}
          placeholder="Last Name"
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="email"
          type="text"
          // label="Email"
          onBlur={() => setFieldTouched("email")}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          className="input"
          placeholder="Email"
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="password"
          type="password"
          // label="Password"
          onBlur={() => setFieldTouched("password")}
          error={errors.password}
          touched={touched.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="rePassword"
          type="password"
          // label="Repeat password"
          onBlur={() => setFieldTouched("rePassword")}
          error={errors.rePassword}
          touched={touched.rePassword}
          onChange={handleChange}
          placeholder="Repeat password"
        />
        <span class="form__underline"></span>
      </div>
      {this.state.formError && (
        <p className="text--error">{this.state.formError}</p>
      )}
      <button type="submit" className="form__button">
        create
      </button>
    </form>
  );

  render() {
    return (
      <div className="Register">
        <h2 className="Register__title">Create account</h2>
        <Formik
          onSubmit={this.handleSubmit}
          render={this.renderForm}
          validate={this.validateForm}
          initialValues={{
            email: "",
            password: "",
            rePassword: ""
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { authorize }
)(Register);
