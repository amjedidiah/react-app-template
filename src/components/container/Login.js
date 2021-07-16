// Module import
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

// Action import
import {handleSetAuthedUser} from 'redux/actions/authedUser';

/**
 * Login component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Login />
 */
export const Login = ({authedUser, location}) => {
  if (authedUser.isSignedIn) {
    return <Redirect to={location?.state?.from?.pathname || '/'} />;
  }
  return <>Login</>;
};

Login.propTypes = {
  /**
   * Login authedUser
   */
  authedUser: PropTypes.object,
  /**
   * Login location
   */
  location: PropTypes.object,
  /**
   * Login handleSetAuthedUser
   */
  handleSetAuthedUser: PropTypes.func,
};

Login.defaultProps = {
  authedUser: {
    isSignedIn: false,
    token: '',
    uniqueID: '',
  },
  location: {}
};

/**
 * Maps state to Login component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({
  authedUser,
});

// Login export
export default connect(mapStateToProps, {handleSetAuthedUser})(Login);
