import axios from 'axios';
import { DELETE_POLL } from './types';

function deletePoll({ _id }) {
  return (dispatch) => {
    axios.post('http://localhost:3000/deletepoll', { _id })
      .then(({ data: { success, msg } }) => {
        return Promise.resolve()
      })
      .catch(error => {
        console.error(error);
      });
  }
}

// we forgot to close the portal, muhahahahaha

export const actionCreators = {
  deletePoll
};
