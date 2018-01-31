import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from './nav_bar';
import Footer from './footer';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="container">
          <Jumbotron className="jumbotron">
            <h2>Welcome To FCC-Voting-App</h2>
            <p>Create custom polls with live results</p>
            <Button bsStyle="primary" componentClass={Link} to='/polls' href='/polls'>View Polls</Button>
          </Jumbotron>
          <Row className="show-grid">
            <Col xs={6} md={4} className="landing-content">
              <span><h3>Live Vote Tracking</h3>
            </span><p>Every vote is updated live and then immediately applied.</p>
            </Col>
            <Col xs={6} md={4} className="landing-content">
              <span><h3>Works Anywhere</h3>
            </span><p>You can vote with or without an account from whereever you are.</p>
            </Col>
            <Col xsHidden md={4} className="landing-content">
              <span><h3>Poll Are Customizable</h3>
            </span><p>Feel free to add additional options to polls with an account.</p>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
