import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class NavBrand extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {img} = this.props;

    return (
      <div className="nav-brand">
        <img alt="img" src={img} />
      </div>
    );
  }
}

NavBrand.propTypes = {
  img: PropTypes.string
};

export default NavBrand;
