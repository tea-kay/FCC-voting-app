import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from './field_group';

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
  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  }

  render() {
    const { email, password, passwordConfirm } = this.state;
    const isEnabled = (email.length > 0 && password.length > 0) && (password === passwordConfirm);
    return (
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
    )
  }
}
