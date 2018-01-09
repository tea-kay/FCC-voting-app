import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from './nav_bar';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="container">
          <Jumbotron className="jumbotron">
            <h2>Welcome To Free-Voting-App</h2>
            <p>Create custom polls with live results</p>
            <Button bsStyle="primary" componentClass={Link} to='/polls' href='/polls'>View Polls</Button>
          </Jumbotron>
          <Row className="show-grid">
            <Col xs={6} md={4} className="landing-content"><span><h3>Live Vote Tracking</h3></span><p>content</p></Col>
            <Col xs={6} md={4} className="landing-content"><span><h3>Works Anywhere</h3></span><p>content</p></Col>
            <Col xsHidden md={4} className="landing-content"><span><h3>Integrate Social</h3></span><p>content</p></Col>
          </Row>
        </div>
      </div>
    );
  }
}
