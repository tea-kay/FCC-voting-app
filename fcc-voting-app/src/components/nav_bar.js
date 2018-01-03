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
          <NavItem componentClass={Link} to='/' href='/' eventKey={1}>Home</NavItem>
          <NavItem componentClass={Link} to='/polls' href='/polls' eventKey={2}>Polls</NavItem>
        </Nav>
        <Nav pullRight>
          {!isAuthenticated &&
            [
              <NavItem key='login' componentClass={Link} to='/login' href='/login' eventKey={3}>Login</NavItem>,
              <NavItem key='signup' componentClass={Link} to='/signup' href='/signup' eventKey={4}>Sign Up</NavItem>
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
