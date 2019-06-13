import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {img} = this.props;

    return (
      <div className="nav-item">
        <img alt="img" src={img} />
      </div>
    );
  }
}

NavItem.propTypes = {
  img: PropTypes.string
};

export default NavItem;
