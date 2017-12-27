import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from './field_group';

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Username"
            placeholder="Enter username"
            required
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email Address"
            placeholder="Enter email"
            required
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            placeholder="Enter password"
            required
          />
          <Button
            type="submit"
            className="btn-primary">
            Submit
          </Button>

        </form>
      </div>
    )
  }
}
