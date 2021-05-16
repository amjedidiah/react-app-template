// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Helper imports
import {images} from 'utils/helpers';

/**
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const addClass = ""
 * const alt = ""
 * const rest = {}
 * const src = ""
 * return <Image src={src} alt={alt} addClass={addClass} {...rest} />
 */
const Image = ({addClass, alt, src, ...rest}) => (
  <img
    src={images[src]}
    alt={alt}
    className={`${addClass} img-fluid`}
    {...rest}
  />
);

Image.propTypes = {
  /**
   * Image addClass
   */
  addClass: PropTypes.string,
  /**
   * Image alt
   */
  alt: PropTypes.string,
  /**
   * Image rest
   */
  rest: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Image src
   */
  src: PropTypes.string,
};

Image.defaultProps = {
  addClass: '',
  alt: '',
  rest: '',
  src: '',
};

// Component export
export default Image;
