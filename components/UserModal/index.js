import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'reactstrap';

import Button from '../../common/Button';
import InputCheckbox from '../../existing/InputCheckbox';
import InputTextBox from '../../common/InputTextBox';

import './styles.scss';

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnCheckboxClick = this.handleOnCheckboxClick.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      roles: []
    };
  }

  componentDidMount() {
    const {type, user} = this.props;

    if (type === 'edit') {
      roles.forEach(role => {
        if (user.roles.includes(role.type)) {
          role.checked = true;
        } else {
          role.checked = false;
        }
      });

      this.setState({
        firstName: user.user_name.split(' ')[0],
        lastName: user.user_name.split(' ')[
          user.user_name.split(' ').length - 1
        ],
        emailAddress: user.email,
        roles: roles
      });
    } else {
      roles.forEach(role => (role.checked = false));

      this.setState({
        roles: roles
      });
    }
  }

  handleOnSubmit = () => {
    const {firstName, lastName, emailAddress, roles} = this.state;

    this.props.onSubmit(firstName, lastName, emailAddress, roles);
    this.props.toggleModal();
  };

  handleOnCheckboxClick = type => () => {
    const {roles} = this.state;

    roles.forEach(role => {
      if (role.type === type) {
        role.checked = !role.checked;
      }
    });

    this.setState({
      roles: roles
    });
  };

  handleOnInputChange = event => {
    switch (event.currentTarget.id) {
      case 'firstNameInput':
        this.setState({
          firstName: event.currentTarget.value
        });
        break;
      case 'lastNameInput':
        this.setState({
          lastName: event.currentTarget.value
        });
        break;
      default:
        this.setState({
          emailAddress: event.currentTarget.value
        });
        break;
    }
  };

  render() {
    const {firstName, lastName, emailAddress, roles} = this.state,
      {isOpen, toggleModal, type} = this.props;

    return (
      <Modal
        className="user-modal"
        isOpen={isOpen}
        toggle={toggleModal}
        centered={true}
      >
        <div className="modal-header">
          <div className="title">
            {type === 'add' ? 'Add User' : 'Edit User'}
          </div>
        </div>

        <div className="modal-body">
          <div className="row-title">User Info</div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <InputTextBox
                id="firstNameInput"
                label="First Name"
                onChange={this.handleOnInputChange}
                placeholder="Enter first name"
                value={firstName}
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <InputTextBox
                id="lastNameInput"
                label="Last Name"
                onChange={this.handleOnInputChange}
                placeholder="Enter last name"
                value={lastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <InputTextBox
                id="emailAddressInput"
                label="Email Address"
                onChange={this.handleOnInputChange}
                placeholder="Enter email address"
                value={emailAddress}
              />
            </div>
          </div>
          <div className="row-title">User Role</div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              {roles !== undefined &&
                roles.map((item, i) => (
                  <InputCheckbox
                    key={i}
                    name={item.name}
                    checked={item.checked}
                    onChange={this.handleOnCheckboxClick(item.type)}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            classNames={['secondary-btn']}
            name={'Cancel'}
            onClick={toggleModal}
          />
          <Button
            classNames={['primary-btn']}
            name={type === 'add' ? 'Add' : 'Save'}
            onClick={this.handleOnSubmit}
          />
        </div>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  toggleModal: PropTypes.func,
  type: PropTypes.string,
  user: PropTypes.object
};

export default UserModal;

const roles = [
  {
    name: 'Configuration Administrator',
    type: 'Config Admin',
    checked: false
  },
  {
    name: 'Account Manager',
    type: 'AM',
    checked: false
  },
  {
    name: 'Portfolio Manager',
    type: 'PM',
    checked: false
  },
  {
    name: 'Premium User',
    type: 'Premium',
    checked: false
  }
];
