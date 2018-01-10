import React, { Component } from 'react';
import { Row, Jumbotron, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import NavBar from './nav_bar';

export default class NewPoll extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Row>
          <Jumbotron className="text-left">
            <h2>Create a new poll.</h2>
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Title of New Poll:</ControlLabel>
                <FormControl
                  type="text"
                  // value={this.state.value}
                  placeholder="Enter text"
                  // onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <ControlLabel>Add Options Separated by Commas:</ControlLabel>
                <FormControl
                  type="textarea"
                />
                <Button>Create Poll</Button>
              </FormGroup>
            </form>
          </Jumbotron>
        </Row>
        </div>
      </div>
    )
  }
}
