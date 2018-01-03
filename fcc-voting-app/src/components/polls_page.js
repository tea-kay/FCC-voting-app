import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import NavBar from './nav_bar';

import NavBar from './nav_bar';

export default class PollsPage extends Component {
  render() {
    return(
      <div>
<<<<<<< HEAD
        <NavBar />
=======
        <NavBar history={this.props.history}/>
>>>>>>> c9c54940680e92de55b3b908d0c68e95ba83ae0d
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
