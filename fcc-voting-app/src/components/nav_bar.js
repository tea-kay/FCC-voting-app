import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCreators } from '../actions/authActions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.clear();
    window.location = 'http://localhost:3001';
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">FCC Voting App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Link to='/'><NavItem eventKey={1}>Home</NavItem></Link>
          <NavItem eventKey={2} href="polls">Polls</NavItem>
        </Nav>
        <Nav pullRight>
          {!isAuthenticated &&
            [
              <NavItem key='login' eventKey={3} href="login">Login</NavItem>,
              <NavItem key='signup' eventKey={4} href="signup">Sign Up</NavItem>
            ]
          }
          {isAuthenticated &&
            <NavItem eventKey={3} onClick={this.handleLogout}>Logout</NavItem>
          }
        </Nav>
      </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
