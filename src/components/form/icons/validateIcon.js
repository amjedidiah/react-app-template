// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ValidateIcon component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const error = null;
 * const touched = false
 * return <ValidateIcon error={error} touched={touched} />
 */
const ValidateIcon = ({touched, error}) => {
  // let className;
  // let icon;

  if (touched) {
    // className = error === undefined ? 'text-success' : 'text-danger';
    // icon = error === undefined ? 'faCheckCircle' : 'faTimes';

    return (
      <div className="form-validation-response">
        {/* <FontAwesomeIcon className={className} icon={icon} /> */}
      </div>
    );
  }
  return false;
};

ValidateIcon.propTypes = {
  /**
   * ValidateIcon touched
   */
  touched: PropTypes.bool,
  /**
   * ValidateIcon error
   */
  error: PropTypes.string,
};

ValidateIcon.defaultProps = {
  touched: false,
  error: null,
};

// Component export
export default ValidateIcon;
