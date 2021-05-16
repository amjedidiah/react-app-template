// Module imports
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * PrivateRoute component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <PrivateRoute><Home /></PrivateRoute>
 */
const PrivateRoute = ({authedUser, children, ...rest}) => (
  <Route
    {...rest}
    render={({location}) =>
      authedUser.isSignedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location},
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  /**
   * PrivateRoute authedUser
   */
  authedUser: PropTypes.object,
  /**
   * PrivateRoute children
   */
  children: PropTypes.element,
};

PrivateRoute.defaultProps = {
  children: <div></div>,
};

/**
 * Maps state to PrivateRoute component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({authedUser});

// Private route export
export default connect(mapStateToProps)(PrivateRoute);
