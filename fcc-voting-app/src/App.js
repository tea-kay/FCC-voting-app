import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './components/landing_page';
import PollsPage from './components/polls_page';
import SignUp from './components/sign_up';
import Login from './components/login';
import PollView from './components/poll_view';
import NewPoll from './components/new_poll';
import MyPolls from './components/my_polls_page';

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
            <Route path="/newpoll" component={NewPoll} />
            <Route path="/mypolls" component={MyPolls} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
