import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'reactstrap';

import InputCheckbox from '../../existing/InputCheckbox';
import InputTextBox from '../../common/InputTextBox';

import './styles.scss';

class AddUserModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnCheckboxClick = this.handleOnCheckboxClick.bind(this);

    this.state = {};
  }

  componentDidMount() {
    console.log('AdUserModal', this.props.roles);
  }

  handleOnCheckboxClick = event => {
    console.log(event);
  };

  handleOnClickToggleModal = () => {};

  render() {
    const {roles, toggleModal} = this.props;

    return (
      <Modal
        className="add-user-modal"
        isOpen={true}
        toggle={toggleModal}
        centered={true}
      >
        <div className="modal-header">
          <div className="title">Add User</div>
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
                    onChange={this.handleOnCheckboxClick}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button className="secondary-btn" onClick={toggleModal}>
            Cancel
          </Button>
          <Button className="primary-btn" onClick={toggleModal}>
            Add
          </Button>
        </div>
      </Modal>
    );
  }
}

AddUserModal.propTypes = {
  open: PropTypes.bool,
  onSubmit: PropTypes.func,
  roles: PropTypes.array,
  toggleModal: PropTypes.func
};

export default AddUserModal;

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
