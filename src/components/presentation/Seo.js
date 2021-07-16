// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

/**
 * Seo component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const pageTitle = 'Lifestyle verticals at your fingertips'
 * const children = <></>
 *
 * return <Seo pageTitle={pageTitle}>{children}</Seo>
 */
const Seo = ({pageTitle, children}) => (
  <>
    <Helmet>
      <title>{`${pageTitle} | React App`}</title>
    </Helmet>
    {children}
  </>
);

Seo.propTypes = {
  /**
   * Seo children
   */
  children: PropTypes.node,
  /**
   * Seo pageTitle
   */
  pageTitle: PropTypes.string,
};

Seo.defaultProps = {
  children: <></>,
  pageTitle: '',
};

// Component export
export default Seo;
