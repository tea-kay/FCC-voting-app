import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
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
          <NavItem eventKey={3} href="login">Login</NavItem>
          <NavItem eventKey={4} href="signup">Sign Up</NavItem>
        </Nav>
      </Navbar>
    </div>
    )
  }
}
