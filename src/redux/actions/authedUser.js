// Module
import {hideLoading, showLoading} from 'react-redux-loading';
import {toast} from 'react-toastify';

// API imports
import api from 'redux/api';

// Type imports
import {SET_AUTHED_USER, UNSET_AUTHED_USER} from 'redux/actions/types';

/**
 * Action creator to unset authed user
 * @return {action} - The action to dispatch
 */
export const unsetAuthedUser = () => ({type: UNSET_AUTHED_USER});

/**
 * Action creator to set authed user
 * @param {string} token - User token
 * @param {id} uniqueID - Unique ID of user to login
 * @return {action} - The action to dispatch
 */
const setAuthedUser = (token, uniqueID) => ({
  type: SET_AUTHED_USER,
  token,
  uniqueID,
});

/**
 * Handles set authed user
 * @param {object} authDetails
 * @return {Promise}
 */
export const handleSetAuthedUser = (authDetails) => (dispatch) => {
  dispatch(showLoading());

  return api
      .post('/auth', authDetails)
      .then(({data}) => {
        const {_id, token} = data?.data;

        toast.success(data?.message);
        dispatch(setAuthedUser(token, _id));
      })
      .catch(({response}) => response && toast.error(response?.data?.message))
      .finally(() => dispatch(hideLoading()));
};
