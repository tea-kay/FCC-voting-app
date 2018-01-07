import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './components/landing_page';
import PollsPage from './components/polls_page';
import SignUp from './components/sign_up';
import Login from './components/login';
import PollView from './components/poll_view';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/polls" exact component={PollsPage} />
            <Route path="/polls/:id" component={PollView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/demo" component={PollView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
