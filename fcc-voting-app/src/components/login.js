import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
<<<<<<< HEAD
=======
import NavBar from './nav_bar';

>>>>>>> c9c54940680e92de55b3b908d0c68e95ba83ae0d
import { actionCreators } from '../actions/authActions';
import FieldGroup from './field_group';
import axios from 'axios';

import NavBar from './nav_bar';

class Login extends Component {
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
    const { history } = this.props;
    this.props.actions.setCurrentUser({ email, password, history });
  }
  render() {
    const { email, password } = this.state;
    const isEnabled = (email.length > 0 && password.length > 0);
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
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
