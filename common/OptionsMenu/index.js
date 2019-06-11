import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import PropTypes from 'prop-types';

import './styles.scss';

class OptionsMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const {items} = this.props;

    return (
      <Dropdown
        className="options-menu-container"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="options-menu-button">
          <i className="glyphicon glyphicon-option-vertical" />
        </DropdownToggle>
        <DropdownMenu className="options-menu" right>
          {items !== undefined &&
            items.map((item, i) => (
              <DropdownItem key={i} className="option" onClick={item.onClick}>
                {item.name}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

OptionsMenu.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func
};

export default OptionsMenu;
