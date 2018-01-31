import { SET_CURRENT_USER, UN_AUTH_USER } from '../actions/types';

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
    case UN_AUTH_USER:
      return {
        ...state,
        user: action.user,
        msg: action.msg
      }
    default:
      return state;
  }
}
