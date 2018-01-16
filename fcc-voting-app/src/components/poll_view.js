import React, { Component } from 'react';
import { Jumbotron, Row, Col, FormGroup, FormControl, ControlLabel, Button, Form } from 'react-bootstrap';
import { PieChart, Pie, Tooltip } from 'recharts';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';

import NavBar from './nav_bar';

class PollView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: null,
      loaded: false,
      selectedOption: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectedOption: e.target.value })
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
    return this.state.poll.votedBy.includes(this.props.auth.user._id)
  }

  render () {
    if (this.state.loaded === false) {
      return <h1>Loading...</h1>
    } else if (this.state.loaded === true && this.state.poll === null) {
      return <h1>Invalid Poll Id</h1>
    }
    console.log(this.state.poll.options)
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
                        name="selectedOption"
                        onChange={this.handleChange}
                        value={this.state.selectedOption}
                      >
                      <option hidden value="">Choose an option:</option>
                      {this.renderOptions()}
                    </FormControl>
                    <Button
                      className="poll-submit"
                      disabled={this.checkUser()}
                    >Submit</Button>
                    {this.props.auth.user._id === this.state.poll.ownedBy &&
                      <Button
                        className="btn-danger poll-submit"
                      >Delete</Button>}
                  </FormGroup>
                </Form>
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
     </div>
     );
   }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(PollView);
