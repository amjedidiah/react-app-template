// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ValidateIcon extends Component {
  static propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.string
  };

  render = () => {
    const { touched, error } = this.props;

    let className;
    let icon;

    if (touched) {
      className = error === undefined ? 'text-success' : 'text-danger';
      icon = error === undefined ? faCheck : faTimes;

      return (
        <div className="form-validation-response">
          <FontAwesomeIcon className={className} icon={icon} />
        </div>
      );
    }
    return false;
  };
}
