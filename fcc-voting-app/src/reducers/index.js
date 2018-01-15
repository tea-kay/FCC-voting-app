import { combineReducers } from 'redux'

import auth from './auth';
import polls from './polls'

export default combineReducers({
  auth,
  polls
})
