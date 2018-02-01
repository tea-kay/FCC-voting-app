import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className="container">
          <span>Built by <a href="https://github.com/tea-kay">@teakay</a>.</span>
        </div>
      </footer>
    );
  }
}
