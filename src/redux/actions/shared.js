// API import
import {hideLoading, showLoading} from 'react-redux-loading';

/**
 * Gets the initial app data
 * @return {Promise<[]>}
 */
const getInitialData = () => Promise.all([]).then(() => ({}));

/**
 * Async action creator to handle initial data
 * @return {actionCreator}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData()
      .then(() => {})
      .finally(() => dispatch(hideLoading()));
};
