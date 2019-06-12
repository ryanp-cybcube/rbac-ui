import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'reactstrap';

import Button from '../../common/Button';

import './styles.scss';

class RemoveUserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    const {isOpen, toggleModal, user} = this.props;

    return (
      <Modal
        className="user-modal remove-user"
        isOpen={isOpen}
        toggle={toggleModal}
        centered={true}
      >
        <div className="modal-header">
          <div className="title">Remove User</div>
          <div className="close" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">×</span>
          </div>
        </div>
        <div className="modal-subheader">
          <img
            alt="img"
            className="warning-icon"
            src={require('../../assets/imgs/warning.svg')}
          />
          Attention: what happens to the data?
        </div>

        <div className="modal-body">
          <div className="message">
            Make sure you really want to remove{' '}
            <strong>{user.user_name}</strong>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            classNames={['secondary-btn']}
            name="Cancel"
            onClick={toggleModal}
          />
          <Button
            classNames={['primary-btn']}
            name="Remove"
            onClick={this.handleOnSubmit}
          />
        </div>
      </Modal>
    );
  }
}

RemoveUserModal.propTypes = {
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  toggleModal: PropTypes.func,
  user: PropTypes.object
};

export default RemoveUserModal;
