// Module imports
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import {Home, Layout, Login, NotFound, Seo} from 'components';

// Private route imports
import PrivateRoute from './PrivateRoute';

/**
 * Routes component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Routes />
 */
const Routes = ({authedUser}) => {
  /**
   * @const {route[]}
   */
  const routes = [
    {path: '/', Component: Home, isPrivate: false, exact: true},
    {
      path: '/login',
      pageTitle: 'Login',
      Component: Login,
      isPrivate: false,
      hasNoHeaderOrFooter: true,
    },
    {
      path: '*',
      pageTitle: 'Page Not Found',
      Component: NotFound,
      isPrivate: false,
      hasNoHeaderOrFooter: true,
    },
  ];

  return (
    <Router basename="/">
      <Switch>
        {routes.map((route, i) => {
          const {pageTitle, isPrivate, ...rest} = route;
          const MyRoute = isPrivate ? PrivateRoute : Route;

          return (
            <MyRoute
              key={`route-${i}`}
              render={() => (
                <Seo pageTitle={pageTitle}>
                  <Layout hasNoHeaderOrFooter={route.hasNoHeaderOrFooter}>
                    <route.Component />
                  </Layout>
                </Seo>
              )}
              {...rest}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  /**
   * Routes authedUser
   */
  authedUser: PropTypes.object,
};

/**
 * Maps state to Routes component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({
  authedUser,
});

// Routes export
export default connect(mapStateToProps)(Routes);
