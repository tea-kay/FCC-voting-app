import { SET_CURRENT_USER } from '../actions/types';

export default (state = {
  isAuthenticated: localStorage.getItem('user') ? true : false
}, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated !isEmpty(action.user),
        user: action.user
      }
    default: return state;
  }
}
