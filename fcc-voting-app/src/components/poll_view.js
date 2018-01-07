import React, { Component } from 'react';
import { Jumbotron, Row, Col, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem, Button, Form } from 'react-bootstrap';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import axios from 'axios';
import _ from 'lodash';

import NavBar from './nav_bar';

export default class PollView extends Component {
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

  render () {
    const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                    {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                    {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
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
              <Col md={6} className="poll-info show-grid">
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
                    <Button className="poll-submit">Submit</Button>
                  </FormGroup>
                </Form>
              </Col>
              <Col md={6} className="show-grid">
                <PieChart width={510} height={400}>
                  <Pie data={data02} innerRadius={45} outerRadius={150} fill="#82ca9d" label/>
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
