import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import NavBar from './nav_bar';
import axios from 'axios';

export default class PollsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: [],
      loaded: false
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/polls')
      .then(({ data: { success, polls } }) => {
        // check if success is true/false
        console.log(polls)
        this.setState({
          polls,
          loaded: true
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  renderPollItems() {
    return this.state.polls.map(({ title, _id }) => {
      return (
        <ListGroupItem
          key={_id}
          href="#link1"
        >
          {title}
        </ListGroupItem>
      )
    });
  }

  render() {
    if (this.state.polls.length === 0 && this.state.loaded === false) {
      return (
        <h1>Loading...</h1>
      )
    } else if (this.state.polls.length === 0 && this.state.loaded) {
      return (
        <h1>No polls in database.</h1>
      )
    }
    return(
      <div>
        <NavBar history={this.props.history}/>
        <div className="container">
          <div className="row landing-content">
            <h2>List of Current Polls</h2>
          </div>
          <ListGroup className="landing-content">
            {this.renderPollItems()}
          </ListGroup>
        </div>
      </div>
    )
  }
}
