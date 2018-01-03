import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import FieldGroup from './field_group';
import axios from 'axios';
import NavBar from './nav_bar';

import NavBar from './nav_bar';

export default class SignUp extends Component {
  constructor() {
  super();
  this.state = {
    email: '',
    password: '',
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
        // window.location = "http://localhost:3001/polls"
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { email, password, passwordConfirm } = this.state;
    const isEnabled = (email.length > 0 && password.length > 0) && (password === passwordConfirm);
    return (
      <div>
<<<<<<< HEAD
        <NavBar />
=======
        <NavBar history={this.props.history}/>
>>>>>>> c9c54940680e92de55b3b908d0c68e95ba83ae0d
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
        </div>
      </div>
    )
  }
}
