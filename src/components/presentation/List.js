// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Component imports
import {Image} from 'components';

/**
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const linkClass = ''
 * const isInList = false
 * const links = []
 * const listClass = ''
 * const listItemClass = ''
 * const title = ''
 * return <List
 *          linkClass={linkClass}
 *          isInList={isInList}
 *          links={links}
 *          listClass={listClass}
 *          listItemClass={listItemClass}
 *          title={title}
 *        />
 */
const List = ({
  linkClass,
  isInList,
  links,
  listClass,
  listItemClass,
  title,
}) => (
  <ul className={`mx-md-3 ${listClass}`}>
    {title && (
      <li className={`text-uppercase px-0 ${listItemClass}`}>{title}</li>
    )}
    {links.map(({isLink, content, image, to}, i) => {
      /**
       * @type {*}
       */
      const Component = isLink ? Link : React.Fragment;

      /**
       * Renders the link content
       * @return {object}
       */
      const renderContent = () => (
        <Component
          key={`link-${i}`}
          to={to}
          className={`text-capitalize p-0 ${linkClass}`}
        >
          {image && content ? (
            <span>
              <Image alt={`${content} field"`} className="mr-3" {...image} />
              {content}
            </span>
          ) : image && !content ? (
            <Image alt={`${content} field"`} {...image} />
          ) : (
            content
          )}
        </Component>
      );

      return isInList ? (
        <li key={`list-link-${i}`} className={`py-2 px-0 ${listItemClass}`}>
          {renderContent()}
        </li>
      ) : (
        <>{renderContent()}</>
      );
    })}
  </ul>
);

List.propTypes = {
  /**
   * List linkClass
   */
  linkClass: PropTypes.string,
  /**
   * List isInList
   */
  isInList: PropTypes.bool,
  /**
   * List links
   */
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * List listClass
   */
  listClass: PropTypes.string,
  /**
   * List listItemClass
   */
  listItemClass: PropTypes.string,
  /**
   * List title
   */
  title: PropTypes.string,
};

List.defaultProps = {
  linkClass: '',
  isInList: false,
  links: [],
  listClass: '',
  listItemClass: '',
  title: '',
};

// Component export
export default List;
