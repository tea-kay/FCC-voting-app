import React, { Component } from 'react';
import { Jumbotron, Row, Col, ControlLabel, FormGroup, FormControl, Button, Form, HelpBlock } from 'react-bootstrap';
import { PieChart, Pie, Tooltip } from 'recharts';
import axios from 'axios';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavBar from './nav_bar';
import Footer from './footer';

class PollView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: null,
      loaded: false,
      voteOption: "",
      newOption: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDeletePoll = this.handleDeletePoll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleAddOptionSubmit = this.handleAddOptionSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ voteOption: e.target.value })
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:3000/polls/${id}`)
      .then(({ data: { poll } }) => {
        this.setState({
          poll,
          loaded: true
        });
      })
  }

  // key-value pair
  renderOptions() {
    return _.map(this.state.poll.options, (votes, option) => {
      return (
        <option
          key={option}
          className="menu-item"
        >
          {option}
        </option>
      )
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { _id } = this.state.poll;
    const { voteOption } = this.state;
    let voter = null;
    if (this.props.auth.isAuthenticated === false) {
      voter = this.props.auth.user;
    } else {
      voter = this.props.auth.user.email;
    }
    axios.post(`http://localhost:3000/polls/${_id}`, { voteOption, voter})
      .then(({ data: { poll } }) => {
        this.setState({
          poll
        })
      })
  }

  handleAddOption(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddOptionSubmit(e) {
    e.preventDefault();
    const { _id } = this.state.poll;
    const { newOption } = this.state;
    if (_.includes(this.state.poll.options, newOption)) {
      return
      //TODO: Add an alert
    }
    const config = { headers: { 'authorization': this.props.auth.token } };
    axios.post(`http://localhost:3000/polls/AddOption/${_id}`, { newOption }, config)
      .then(({ data: { poll } }) => {
        this.setState({
          poll,
          newOption: ""
        })
      });
  }

  checkPollData() {
    return _.every(this.state.poll.options)
  }

  buildChart() {
      return _.map(this.state.poll.options, (value, name) => {
        return { name, value };
      })
  }

  checkUser() {
    if (this.props.auth.isAuthenticated === false) {
      // TODO: if logged out, check if IP address is in votedBy array
      return this.state.poll.votedBy.includes(this.props.auth.user);
    }
    return this.state.poll.votedBy.includes(this.props.auth.user.email)
  }

  checkIfLoggedIn() {
    if (this.props.auth.isAuthenticated === false) {
      return true;
    } else {
      return false;
    }
  }

  handleDeletePoll() {
    const { _id } = this.state.poll;
    axios.post('http://localhost:3000/deletepoll', { _id })
      .then(({ data: { success, msg } }) => {
        this.props.history.push('/mypolls');
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    if (this.state.loaded === false) {
      return <h1>Loading...</h1>
    } else if (this.state.loaded === true && this.state.poll === null) {
      return <h1>Invalid Poll Id</h1>
    }
    return (
      <div>
        <NavBar />
        <div className="container">
          <Jumbotron>
            <Row>
              <Col md={6} className="poll-info">
                <h3>{this.state.poll.title}</h3>
                <p>I'd like to vote for:</p>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="formControlsSelect">
                    <FormControl
                        inputRef={ el => this.inputEl=el }
                        componentClass="select"
                        className="form-options"
                        placeholder="Choose an option:"
                        name="voteOption"
                        onChange={this.handleChange}
                        value={this.state.voteOption}
                      >
                      <option hidden value="">Choose an option:</option>
                      {this.renderOptions()}
                    </FormControl>
                      <Button
                        type="submit"
                        className="poll-submit btn-success"
                        disabled={this.checkUser()}
                      >Submit</Button>
                      {this.checkUser() &&
                        <HelpBlock>You have already voted on this poll.</HelpBlock>}
                  </FormGroup>
                </Form>
                <Form
                  onSubmit={this.handleAddOptionSubmit}
                >
                  <FormGroup>
                    <ControlLabel>New Option</ControlLabel>
                    <FormControl
                      className="option-submit"
                      onChange={this.handleAddOption}
                      name="newOption"
                      value={this.state.newOption}
                      disabled={this.checkIfLoggedIn()}
                    />
                    {this.checkIfLoggedIn() &&
                    <HelpBlock>You must log in to add options.</HelpBlock>}
                    {/* TODO: Add validation for adding repeat option before axios.post */}
                  </FormGroup>
                </Form>
                {this.props.auth.user && this.props.auth.user._id === this.state.poll.ownedBy &&
                  <Button
                    className="btn-danger poll-submit"
                    onClick={this.handleDeletePoll}
                  >Delete</Button>}
              </Col>
              <Col md={6} className="show-grid">
                <PieChart width={510} height={400}>
                  <Pie data={this.buildChart()}
                    dataKey="value"
                    innerRadius={45}
                    outerRadius={150}
                    fill="#82ca9d" label/>
                  <Tooltip/>
                </PieChart>
              </Col>
           </Row>
         </Jumbotron>
       </div>
       <Footer />

     </div>
     );
   }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(PollView);
