import React, { Component } from 'react';
import { Jumbotron, Row, Col, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem, Button, Form } from 'react-bootstrap';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


import NavBar from './nav_bar';

export default class PollView extends Component {
  render () {
    const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                    {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                    {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
    return (
      <div>
        <NavBar />
        <div className="container">
          <Jumbotron>
            <Row>
              <Col md={6} className="poll-info show-grid">
                <h3>Title</h3>
                <p>I'd like to vote for:</p>
                <Form>
                  <FormGroup controlId="formControlsSelect">
                    <FormControl
                        inputRef={ el => this.inputEl=el }
                        componentClass="select"
                        className="form-options"
                        placeholder="Choose an option:"
                      >
                      <option hidden value="">Choose an option:</option>
                      <option className="menu-item">option1</option>
                      <option className="menu-item">option2</option>
                      <option className="menu-item">option3</option>
                    </FormControl>
                    <Button type="submit" className="poll-submit">Submit</Button>
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
