import React, {Component} from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class InputTextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {classNames, label, onChange, placeholder, value} = this.props;

    return (
      <div className="input-textbox-container">
        <div className="input-textbox-label">{label}</div>
        <Input
          type="text"
          className={classnames('input-textbox', classNames)}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

InputTextBox.propTypes = {
  classNames: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default InputTextBox;
