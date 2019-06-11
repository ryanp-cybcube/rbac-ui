'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const InputCheckbox = ({disabled, label, name, checked = false, onChange}) => (
  <React.Fragment>
    {label && <div className={classnames('input-checkbox-label', {disabled: disabled})}>{label}</div>}
    <label className={classnames('input-checkbox-container', {disabled: disabled})}>
      {!disabled && <input type="checkbox" name={name} checked={checked} onChange={onChange} />}
      {disabled && <input type="checkbox" name={name} checked={checked} readOnly />}
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      <span className="input-checkmark" />
      <span className="input-name">{name}</span>
    </label>
  </React.Fragment>
);

InputCheckbox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default InputCheckbox;