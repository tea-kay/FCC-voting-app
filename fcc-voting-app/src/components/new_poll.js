import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import NavBar from './nav_bar';
import { actionCreators } from '../actions/createNewPoll';
import { Redirect } from 'react-router'

class NewPoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      options: '',
      fireRedirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true })
    const { title, options: optionStrings } = this.state;
    const ownedBy = this.props.auth.user._id;
    const options = optionStrings.split(',').map(option => option.trim());

    this.props.actions.createNewPoll({ title, ownedBy, options });
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

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
                  name="title"
                  value={this.state.title}
                  placeholder="Enter title"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <ControlLabel className="new-poll-labels">Add Options:</ControlLabel><HelpBlock> Separate all options by commas.</HelpBlock>
                <FormControl
                  type="textarea"
                  placeholder="Enter options"
                  name="options"
                  value={this.state.options}
                  onChange={this.handleChange}
                />
                <Button type="submit" className="create-btn btn-primary">Create Poll</Button>
              </FormGroup>
            </form>
            {fireRedirect && (
              <Redirect to={from || '/mypolls'}/>
            )}
          </Jumbotron>
        </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth }) => {
  return { polls, auth };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);
