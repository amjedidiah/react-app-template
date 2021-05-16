// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * FormIcon component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <FormIcon />
 */
const FormIcon = ({icon}) =>
  icon && (
    <div className="form-icon">
      {/* <FontAwesomeIcon icon={this.props.icon} /> */}
    </div>
  );

FormIcon.propTypes = {
  /**
   * FormIcon icon
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

FormIcon.defaultProps = {
  icon: '',
};

// Component export
export default FormIcon;
