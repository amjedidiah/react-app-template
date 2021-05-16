// Module import
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

// Reducer imports
import authedUser from './authedUser';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
});
