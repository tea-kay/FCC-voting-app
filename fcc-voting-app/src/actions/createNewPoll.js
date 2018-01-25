import axios from 'axios';
import { CREATE_NEW_POLL } from './types';

function createNewPoll({ title, ownedBy, options, history }) {
  return (dispatch) => {
    axios.post('http://localhost:3000/newpoll', { title, ownedBy, options })
      .then(({ data: { success, msg, poll } }) => {
        dispatch({
          type: CREATE_NEW_POLL,
          payload: poll
        });
        history.push('/mypolls');
      })
      .catch(error => {
        console.error(error);
      });
  }
}

// we forgot to close the portal, muhahahahaha

export const actionCreators = {
  createNewPoll
};
