import axios from 'axios';
import { SET_CURRENT_USER } from './types';

function setCurrentUser({ email, password, history }) {
  return (dispatch) => {
    axios.post('http://localhost:3000/signin', { email, password })
      .then(({ data: { token, user } }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({
          type: SET_CURRENT_USER,
          msg: 'Successfully signed in',
          user,
          token
        });

        history.push({ pathname: '/polls' });

      })
      .catch(error => {
        console.error(error);
      });
  }
}

export const actionCreators = {
  setCurrentUser
};
