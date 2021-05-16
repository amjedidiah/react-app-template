// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const addClass = ''
 * const click = () => {}
 * const text = ''
 *
 * return <Button addClass={addClass} click={click} text={text} />
 */
const Button = ({addClass, click, text}) => (
  <button className={`btn btn--custom ${addClass}`} onClick={click}>
    {text}
  </button>
);

Button.propTypes = {
  /**
   * Button addClass
   */
  addClass: PropTypes.string,
  /**
   * Button click
   */
  click: PropTypes.func,
  /**
   * Button text
   */
  text: PropTypes.string,
};

Button.defaultProps = {
  addClass: '',
  click: () => {},
  text: '',
};

// Component export
export default Button;
