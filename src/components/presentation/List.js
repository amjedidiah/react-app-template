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
 * const links = []
 * const listClass = ''
 * const listItemClass = ''
 * const title = ''
 * return <List
 *          linkClass={linkClass}
 *          links={links}
 *          listClass={listClass}
 *          listItemClass={listItemClass}
 *          title={title}
 *        />
 */
const List = ({linkClass, links, listClass, listItemClass, title}) => (
  <ul className={listClass}>
    {title && (
      <li className={`text-uppercase px-0 ${listItemClass}`}>{title}</li>
    )}
    {links.map(({isLink, content, image, to, addClass, onClick}, i) => {
      /**
       * @type {*}
       */
      const Component = isLink ? Link : React.Fragment;
      const componentRest = isLink && {
        to,
        className: `${linkClass} ${addClass?.a}`,
      };

      return (
        <li
          key={`list-link-${i}`}
          className={`${listItemClass} ${addClass?.li}`}
          onClick={onClick}
        >
          <Component key={`link-${i}`} {...componentRest}>
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
        </li>
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
  links: [],
  listClass: '',
  listItemClass: '',
  title: '',
};

// Component export
export default List;
