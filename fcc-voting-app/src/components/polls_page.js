import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import NavBar from './nav_bar';

export default class PollsPage extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="container">
          <div className="row landing-content">
            <h2>List of Current Polls</h2>
          </div>
          <ListGroup className="landing-content">
            <ListGroupItem href="#link1">React V.S. Angular</ListGroupItem>
            <ListGroupItem href="#link2">Mongo V.S. MySQL</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}
