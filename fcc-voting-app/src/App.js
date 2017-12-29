import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import setAuthorizationToken from './components/utils/setAuthorizationToken';
import './App.css';
import NavBar from './components/nav_bar';
import LandingPage from './components/landing_page';
import PollsPage from './components/polls_page';
import SignUp from './components/sign_up';
import Login from './components/login';

setAuthorizationToken(localStorage.jwtToken);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/polls" component={PollsPage} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
