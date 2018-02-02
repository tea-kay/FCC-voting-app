import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from './nav_bar';
import Footer from './footer'

class MyPolls extends Component {
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

  renderMyPolls() {
    return this.state.polls.map(({ title, _id, ownedBy }) => {
      if (this.props.auth.user._id === ownedBy)
      return (
        <ListGroupItem
          className="poll-items"
          key={_id}
          onClick={() => {
            this.props.history.push(`/polls/${_id}`)
          }}
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
        <div>
          <NavBar />
          <div className="container">
            <h1>Currently there are no polls in the database. Create a new poll now.</h1>
          </div>
          <Footer />
        </div>
      )
    } else if (this.state.polls === undefined) {
      return (
        <h1>Login to see your polls.</h1>
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
            {this.renderMyPolls()}
          </ListGroup>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(MyPolls);
