import React, { Component } from 'react';

import NavBar from './nav_bar';

export default class NewPoll extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>Create a new poll.</h1>
        </div>
      </div>
    )
  }
}
