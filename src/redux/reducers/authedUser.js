// Type imports
import {SET_AUTHED_USER, UNSET_AUTHED_USER} from 'redux/actions/types';

/**
 * @const {authedUser}
 */
const INIT = {
  isSignedIn: false,
  token: '',
  uniqueID: '',
};

/**
 * Reducer function for authedUser
 * @param {authedUser} state - current authedUser state
 * @param {action} action - Redux action
 * @return {authedUser} - returned authedUser state
 */
const authedUser = (state = INIT, {token, type, uniqueID}) => {
  switch (type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        isSignedIn: true,
        token,
        uniqueID,
      };
    case UNSET_AUTHED_USER:
      return INIT;
    default:
      return state;
  }
};

export default authedUser;
