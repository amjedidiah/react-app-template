// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import {Footer, Header} from 'components';

/**
 * Layout component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const children = <></>
 * const hasNoHeaderOrFooter = false
 * return <Layout>{children}</Layout>
 */
const Layout = ({children, hasNoHeaderOrFooter}) => (
  <>
    {!hasNoHeaderOrFooter && <Header />}
    <main>{children}</main>
    {!hasNoHeaderOrFooter && <Footer />}
  </>
);

Layout.propTypes = {
  /**
   * Layout children
   */
  children: PropTypes.element,
  /**
   * Layout hasNoHeaderOrFooter
   */
  hasNoHeaderOrFooter: PropTypes.bool,
};

Layout.defaultProps = {
  children: <></>,
  hasNoHeaderOrFooter: false,
};

// Component export
export default Layout;
