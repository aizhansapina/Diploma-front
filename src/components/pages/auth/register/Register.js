import React, { Component } from "react";
import Input from "../../../shared/input/Input";

import { connect } from "react-redux";
import { authorize } from "../../../../store/actions/authActions";
import { register } from "../../../../services/auth";
import "../../../shared/header/Header-shop.scss";

import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorFields: {},
      fields: {
        full_name: '',
        lastName: '',
        email: '',
        password1: '',
        rePassword: '',
      }
    };
  }

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

  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault();
      register(this.state.fields.email, this.state.fields.password1, this.state.fields.full_name)
        .then(response => {
          console.log(response)
          this.props.history.push('/auth/notification');
        })
        .catch(console.error)
  }

  setFormField = e => {
    const {
      name,
      value
    } = e.target;
    this.setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      fields: {
        email, password1, rePassword, full_name, lastName
      },
      errorFields: {
        email: emailError, password: passwordError
      }
    } = this.state;
    return (
      <div className="Register">
        <h2 className="Register__title">Create account</h2>
        <form onSubmit={this.handleSubmit} className="Register__form">
      <div className="form__input">
        <Input
          name="full_name"
          type="text"
          onChange={this.setFormField}
          className="input"
          placeholder="First Name"
          value={full_name}
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="lastName"
          type="text"
          className="input"
          onChange={this.setFormField}
          placeholder="Last Name"
          value={lastName}
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="email"
          type="text"
          onChange={this.setFormField}
          className="input"
          placeholder="Email"
          value={email}
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="password1"
          type="password"
          onChange={this.setFormField}
          placeholder="Password"
          value={password1}
        />
        <span class="form__underline"></span>
      </div>
      <div className="form__input">
        <Input
          name="rePassword"
          type="password"
          onChange={this.setFormField}
          placeholder="Repeat password"
          value={rePassword}
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
      </div>
    );
  }
}

export default connect(null, { authorize })(Register);
