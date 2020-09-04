// Module imports
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component imports
import Header from 'components/header';
import Jumbo from 'components/jumbo';

// Asset imports
import 'assets/css/app.css';
import Contact from 'components/contact';

// Start && Export Component
class App extends React.Component {
  static propTypes = {
    color: PropTypes.string
  };

  render = () => (
    <Router basename={'/'}>
      <Header />
      <Route
        path={['/', '/register', '/login']}
        component={(props) => ({ '/contact-me': <Contact {...props} /> }[props.location.pathname] || <Jumbo {...props} />)
        }
      />
    </Router>
  );
}

const mapStateToProps = ({ mode }) => ({ color: mode.color });

export default connect(mapStateToProps)(App);
