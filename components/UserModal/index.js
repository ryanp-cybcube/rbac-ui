import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'reactstrap';

import InputCheckbox from '../../existing/InputCheckbox';
import InputTextBox from '../../common/InputTextBox';

import './styles.scss';

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnAddUser = this.handleOnAddUser.bind(this);
    this.handleOnCheckboxClick = this.handleOnCheckboxClick.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      roles: []
    };
  }

  componentDidMount() {
    const {type} = this.props;

    if (type === 'edit') {
      this.setState({
        firstName: 'firstName',
        lastName: 'lastName',
        emailAddress: 'emailAddress',
        roles: roles
      });
    } else {
      this.setState({
        roles: roles
      });
    }
  }

  handleOnAddUser = () => {
    console.log(this.state.roles);
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

  render() {
    const {toggleModal, type} = this.props;

    return (
      <Modal
        className="user-modal"
        isOpen={true}
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
              <InputTextBox label="First Name" placeholder="Enter first name" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <InputTextBox label="Last Name" placeholder="Enter last name" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <InputTextBox
                label="Email Address"
                placeholder="Enter email address"
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
          <Button className="secondary-btn" onClick={toggleModal}>
            Cancel
          </Button>
          <Button className="primary-btn" onClick={this.handleOnAddUser}>
            Add
          </Button>
        </div>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  open: PropTypes.bool,
  onSubmit: PropTypes.func,
  toggleModal: PropTypes.func,
  type: PropTypes.string
};

export default UserModal;

const roles = [
  {
    name: 'Configuration Administrator',
    type: 'Config Admin',
    checked: false
  },
  {name: 'Account Manager', type: 'AM', checked: false},
  {name: 'Portfolio Manager', type: 'PM', checked: false},
  {name: 'Premium User', type: 'Premium', checked: false}
];

/* <div className="row-title">Administrator Info</div>
  <div className="row-with-2cols">
    <InputTextBox label="First Name" placeholder="Enter first name" />
    <InputTextBox label="Last Name" placeholder="Enter last name" />
  </div>
  <div className="row-with-1col">
    <InputTextBox
      label="Email Address"
      placeholder="Enter email address"
    />
  </div>
  <div className="row-title">Licenses</div>
  <div className="row-with-2cols">
    <InputTextBox
      label="Portfolio Manager Licenses"
      placeholder="Enter Number"
    />
    <InputTextBox
      label="Account Manager Licenses"
      placeholder="Enter Number"
    />
  </div>
</div> */

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// import AddUserModal from './addUser';
// import EditUserModal from './editUser';
// import EmptyComponent from '../../existing/EmptyComponent';

// import './styles.scss';

// class UserModal extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let Modal;

//     switch (this.props.type) {
//       case 'ADD':
//         Modal = AddUserModal;
//         break;

//       case 'EDIT':
//         Modal = EditUserModal;
//         break;

//       default:
//         Modal = EmptyComponent;
//         break;
//     }

//     return <Modal {...this.props} />;
//   }
// }

// UserModal.propTypes = {
//   type: PropTypes.string
// };

// export default UserModal;