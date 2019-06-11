'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import classnames from 'classnames';

import './styles.scss';

export class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.handleOnClickElement = this.handleOnClickElement.bind(this);
  }

  handleToggleDropdown = () => {
    if (!this.props.disabled) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }

  handleClickOutside = () => {
    this.setState({
      dropdownOpen: false
    });
  }

  handleOnClickElement = (id, value, displayName) => (event) => {
    event.stopPropagation();

    this.setState({
      dropdownOpen: false
    });

    this.props.updateSelectedObj({id, value, displayName});
  }

  render() {
    const {
      label,
      selectedObj,
      objectsArr,
      disabled
    } = this.props;

    return (
      <div className={classnames('input-select-container', {disabled: disabled})}>
        {label && <div className="input-label">{label}</div>}

        <div className="input-select" onClick={this.handleToggleDropdown}>
          <span className="selected-value">
            {selectedObj.displayName ? selectedObj.displayName : selectedObj.value}
          </span>

          <span className="arrow-down" />
        </div>

        {this.state.dropdownOpen && objectsArr.length &&
          <div className="dropdown-wrapper">
            <div className="dropdown">
              {objectsArr.map(element => (
                <div key={`${element.id}_${element.value}`}
                  onClick={this.handleOnClickElement(element.id, element.value, element.displayName)}
                  className={classnames('element', {active: selectedObj.id === element.id})}>
                  {element.displayName ? element.displayName : element.value}
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    );
  }
}

InputSelect.propTypes = {
  label: PropTypes.string,
  selectedObj: PropTypes.object,
  objectsArr: PropTypes.array,
  updateSelectedObj: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default onClickOutside(InputSelect);