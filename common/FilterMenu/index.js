import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InputCheckbox from '../../existing/InputCheckbox';

import './styles.scss';

class FilterMenu extends Component {
  constructor(props) {
    super(props);

    this.handleOnApply = this.handleOnApply.bind(this);
    this.handleOnClear = this.handleOnClear.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      items: []
    };
  }

  componentDidMount() {
    const {items} = this.props;

    this.setState({
      items: items
    });
  }

  componentDidUpdate(prevProps) {
    const {items} = this.props;

    if (!Object.is(prevProps.items, items)) {
      this.setState({
        items: items
      });
    }
  }

  handleOnApply = () => {
    const {items} = this.state;

    this.props.onFilter(
      items
        .filter(item => {
          return item.checked;
        })
        .map(item => item.type)
    );

    this.setState({
      dropdownOpen: false
    });
  };

  handleOnClear = () => {
    const {items} = this.state;

    items.forEach(item => {
      item.checked = false;
    });

    this.setState({
      selected: items
    });
  };

  handleOnChange = type => () => {
    const {items} = this.state;

    items.forEach(item => {
      if (item.type === type) {
        item.checked = !item.checked;
      }
    });

    this.setState({
      items: items
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const {name} = this.props,
      {dropdownOpen, items} = this.state;

    return (
      <Dropdown
        className="filter-menu-container"
        isOpen={dropdownOpen}
        toggle={this.toggle}
      >
        <div className="filter-label">{name}</div>
        <DropdownToggle
          className={classnames('filter-menu-button', {
            open: this.state.dropdownOpen
          })}
        >
          <i className="glyphicon glyphicon-menu-down" />
        </DropdownToggle>
        <DropdownMenu className="filter-menu">
          <div className="input-checkbox-wrapper">
            {items.map((item, i) => (
              <InputCheckbox
                key={i}
                name={item.name}
                checked={item.checked}
                onChange={this.handleOnChange(item.type)}
              />
            ))}
          </div>
          <div className="buttons-menu">
            <button className="clear-button" onClick={this.handleOnClear}>
              Clear
            </button>
            <button className="apply-button" onClick={this.handleOnApply}>
              Apply
            </button>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

FilterMenu.propTypes = {
  items: PropTypes.array,
  onFilter: PropTypes.func,
  name: PropTypes.string
};

export default FilterMenu;

/* <div key={i} className="input-checkbox-item">
  <input
    className="input-checkbox"
    type="checkbox"
    onClick={this.handleOnChange(item.type)}
    defaultChecked={item.checked}
  />
  <div className="input-label">{item.name}</div>
</div> */
