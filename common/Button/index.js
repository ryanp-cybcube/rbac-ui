import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {classNames, name, onClick} = this.props;

    return (
      <button className={classnames('base-button', classNames)} onClick={onClick}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  classNames: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
