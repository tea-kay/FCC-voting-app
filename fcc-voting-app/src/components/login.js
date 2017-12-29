import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from './field_group';
import axios from 'axios';
import setAuthorizationToken from './utils/setAuthorizationToken';


export default class Login extends Component {
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
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = this.state;
    axios.post('http://localhost:3000/signin', { email, password })
      .then(response => {
        console.log(response);
        const user = response.data.user;
        localStorage.setItem('user', user.email);
        window.location = "http://localhost:3001/polls"
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const { email, password } = this.state;
    const isEnabled = (email.length > 0 && password.length > 0);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email Address"
            placeholder="Enter email"
            value={this.setState.email}
            onChange={this.handleEmailChange}
            required
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            placeholder="Enter password"
            value={this.setState.password}
            onChange={this.handlePasswordChange}
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
    )
  }
}
