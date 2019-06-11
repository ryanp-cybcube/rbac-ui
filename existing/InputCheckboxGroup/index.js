'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InputCheckbox from '../InputCheckbox';

import './styles.scss';

class InputCheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    event.stopPropagation();

    if (!this.props.disabled) {
      const
        item = event.target.name,
        isChecked = event.target.checked;

      this.props.onChange(item, isChecked);
    }
  }

  render() {
    const {
      disabled,
      prefixKey,
      groupLabel,
      inputArr
    } = this.props;

    return (
      <div className={classnames('input-checkbox-group-container', {disabled: disabled})}>
        {groupLabel && <div className="group-label">{groupLabel}</div>}
        <div className="input-checkbox-group">
          {
            inputArr.map((item, count) => (
              <InputCheckbox
                key={`${prefixKey}_${count}`}
                name={item.name}
                checked={item.selected}
                onChange={this.handleChange}
                disabled={item.disabled ? item.disabled : disabled}
              />
            ))
          }
        </div>
      </div>

    );
  }
}

InputCheckboxGroup.propTypes = {
  disabled: PropTypes.bool,
  prefixKey: PropTypes.string,
  groupLabel: PropTypes.string,
  inputArr: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputCheckboxGroup;