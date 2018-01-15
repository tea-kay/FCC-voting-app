import axios from 'axios';
import { CREATE_NEW_POLL } from './types';

function createNewPoll({ title, ownedBy, options }) {
  return (dispatch) => {
    axios.post('http://localhost:3000/newpoll', { title, ownedBy, options })
      .then(({ data: { success, msg, poll } }) => {
        dispatch({
          type: CREATE_NEW_POLL,
          payload: poll
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export const actionCreators = {
  createNewPoll
};
