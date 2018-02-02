import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from './field_group';
import axios from 'axios';
import { Redirect } from 'react-router'

import NavBar from './nav_bar';
import Footer from './footer';

export default class SignUp extends Component {
  constructor() {
  super();
  this.state = {
    email: '',
    password: '',
    fireRedirect: false
  };
  }
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }
  handlePasswordConfirmChange = (evt) => {
    this.setState({ passwordConfirm: evt.target.value });
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = this.state;
    axios.post('http://localhost:3000/signup', { email, password })
      .then(response => {
        console.log(response);
        this.setState({ fireRedirect: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { email, password, passwordConfirm } = this.state;
    const { fireRedirect } = this.state
    const isEnabled = (email.length > 0 && password.length > 0) && (password === passwordConfirm);
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
            />
            <FieldGroup
              id="formControlsPasswordConfirm"
              label=" Confirm Password"
              type="password"
              placeholder="Enter password"
              value={this.state.passwordConfirm}
              onChange={this.handlePasswordConfirmChange}
              required
            />
            <Button
              type="submit"
              className="btn-primary"
              disabled={!isEnabled}>
              Submit
            </Button>

          </form>
          {fireRedirect && (
            <Redirect to={ '/login' }/>
          )}
        </div>
        <Footer />
      </div>
    )
  }
}
