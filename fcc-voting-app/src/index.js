import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import rootReducer from './reducers';

import { SET_CURRENT_USER, UN_AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const initializeApp = () => {
  if (localStorage.getItem('token')) {
    store.dispatch({
      type: SET_CURRENT_USER,
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token'),
      msg: 'Welcome back!'
    });
    return
  } else {
    return axios.get('http://freegeoip.net/json/')
      .then(({ data: { ip } }) => {
        store.dispatch({
          type: UN_AUTH_USER,
          user: ip,
          msg: 'Please sign in to add an option.'
        });
      });
  }
}

initializeApp();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
