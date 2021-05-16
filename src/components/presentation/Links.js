// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

// Component imports
import {Image} from 'components';

/**
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const addClass = ''
 * const isInList = false
 * const links = []
 * const listClass = ''
 * return <Links
 *          addClass={addClass}
 *          isInList={isInList}
 *          links={links}
 *          listClass={listClass}
 *        />
 */
const Links = ({addClass, isInList, links, listClass}) =>
  links.map(({isNavLink, name, src, to}, i) => {
    /**
     * @type {*}
     */
    const Component = isNavLink ? NavLink : Link;

    /**
     * Renders the link content
     * @return {object}
     */
    const renderContent = () => (
      <Component
        key={`link-${i}`}
        to={to}
        className={`text-capitalize ${addClass}`}
      >
        {src ? <Image src={src} alt={`${name} field"`} /> : name}
      </Component>
    );

    return isInList ? (
      <li key={`list-link-${i}`} className={listClass}>
        {renderContent()}
      </li>
    ) : (
      <>{renderContent()}</>
    );
  });

Links.propTypes = {
  /**
   * Links addClass
   */
  addClass: PropTypes.string,
  /**
   * Links isInList
   */
  isInList: PropTypes.bool,
  /**
   * Links links
   */
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Links listClass
   */
  listClass: PropTypes.string,
};

Links.defaultProps = {
  addClass: '',
  isInList: false,
  links: [],
  listClass: '',
};

// Component export
export default Links;
