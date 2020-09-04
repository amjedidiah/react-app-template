// Module imports
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducer imports
import modeReducer from './modeReducer.js';

// Export combined reducers
export default combineReducers({
  mode: modeReducer,
  form: formReducer
});
