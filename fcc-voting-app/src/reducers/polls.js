import {
  CREATE_NEW_POLL,
  DELETE_POLL
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_POLL:
      return state.concat([action.payload])
    case DELETE_POLL:
      return 
    default:
      return state;
  }
}
