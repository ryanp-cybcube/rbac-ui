import React, {Component} from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class InputSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {classNames, placeholder, onChange} = this.props;

    return (
      <div className="input-searchbox-container has-feedback">
        <Input
          type="text"
          className={classnames('input-searchbox', classNames)}
          onChange={onChange}
          placeholder={placeholder}
        />
        <i className="glyphicon glyphicon-search form-control-feedback" />
      </div>
    );
  }
}

InputSearchBox.propTypes = {
  classNames: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default InputSearchBox;
