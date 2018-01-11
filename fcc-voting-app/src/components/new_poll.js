import React, { Component } from 'react';
import { Row, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import NavBar from './nav_bar';

export default class NewPoll extends Component {
  handleSubmit = () => {
    console.log("working");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Row>
          <Jumbotron className="create-poll">
            <h2>Create A New Poll.</h2>
            <form onSubmit={this.handleSubmit}>
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
                <ControlLabel className="new-poll-labels">Add Options:</ControlLabel><HelpBlock> Separate all options by commas.</HelpBlock>
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
