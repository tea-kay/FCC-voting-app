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
          <Jumbotron className="create-poll">
            <h2>Create a new poll.</h2>
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel className="new-poll-labels">Title of New Poll:</ControlLabel>
                <FormControl
                  type="text"
                  // value={this.state.value}
                  placeholder="Enter title"
                  // onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <ControlLabel className="new-poll-labels">Add Options Separated by Commas:</ControlLabel>
                <FormControl
                  type="textarea"
                  placeholder="Enter options"

                />
                <Button className="create-btn btn-primary">Create Poll</Button>
              </FormGroup>
            </form>
          </Jumbotron>
        </Row>
        </div>
      </div>
    )
  }
}
