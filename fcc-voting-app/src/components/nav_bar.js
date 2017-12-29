import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class NavBar extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">FCC Voting App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="polls">Polls</NavItem>
        </Nav>
        <Nav pullRight>
          {!isAuthenticated &&
            <NavItem eventKey={3} href="login">Login</NavItem>
          }
          {isAuthenticated &&
            <NavItem eventKey={5} href="logout">Logout</NavItem>
          }
          <NavItem eventKey={4} href="signup">Sign Up</NavItem>
        </Nav>
      </Navbar>
    </div>
    )
  }
}

Navbar.propTypes = {
}
