import { SET_CURRENT_USER } from '../actions/types';


const DEFAULT_STATE = {
  isAuthenticated: false,
  user: null,
  msg: null,
  token: null
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.user,
        msg: action.msg,
        token: action.token
      };
    default:
      return state;
  }
}
