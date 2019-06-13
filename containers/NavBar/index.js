import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBrand from '../../components/NavBrand';
import NavItem from '../../components/NavItem';

import './styles.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="nav-bar">
        <NavBrand img={require('../../assets/imgs/buildings-32.svg')} />
        <NavItem img={require('../../assets/imgs/buildings-32.svg')} />
        <NavItem img={require('../../assets/imgs/line-chart-32.svg')} />
        <NavItem img={require('../../assets/imgs/briefcase-32.svg')} />
        <NavItem img={require('../../assets/imgs/bar-chart-32.svg')} />
        <NavItem img={require('../../assets/imgs/library-32.svg')} />
        <NavItem img={require('../../assets/imgs/gear-32.svg')} />
        <NavItem img={require('../../assets/imgs/avatar-32.svg')} />
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
