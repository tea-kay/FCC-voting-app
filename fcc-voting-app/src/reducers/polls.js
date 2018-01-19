import {
  CREATE_NEW_POLL,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_POLL:
      return state.concat([action.payload])
    default:
      return state;
  }
}
