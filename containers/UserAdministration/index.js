import React, {Component} from 'react';

import Button from '../../common/Button';
import UserModal from '../../components/UserModal/';
// import Scorecard from '../../common/Scorecard';
import UsersTable from '../../components/UsersTable';

import './styles.scss';

class UserAdministration extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.simpleAction = this.simpleAction.bind(this);

    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  simpleAction = () => {
    alert('SUBMIT');
    this.toggleModal();
  };

  render() {
    const {modal} = this.state;

    return (
      <div className="ua-container">
        <div className="ua-header">User Administration</div>
        <div className="ua-content">
          {/* <Scorecard cards={cards} /> */}
          <div className="ua-opts">
            <Button
              classNames={['add-button']}
              name="Add User"
              onClick={this.toggleModal}
            />
            <UsersTable data={data} roles={roles} />
          </div>
        </div>
        <div className="ua-footer">
          Copyright © 2019 CyberCube. All rights reserved.
        </div>
        {modal && (
          <UserModal
            isOpen={modal}
            onSubmit={this.simpleAction}
            toggleModal={this.toggleModal}
            type="add"
          />
        )}
      </div>
    );
  }
}

export default UserAdministration;

const // cards = [
  //     {key: 'am licenses', value: '148'},
  //     {key: 'am activations', value: '148'},
  //     {key: 'pm licenses', value: '148'},
  //     {key: 'pm activations', value: '148'},
  //     {key: 'pending invitations', value: '2'},
  //     {key: 'password expired', value: '1'}
  //   ],
  data = [
    {
      user_name: 'Jane Aerosmith',
      last_login: '24 days ago',
      role: ['AM']
    },
    {
      user_name: 'Michael Backer',
      last_login: '24 days ago',
      role: ['Premium']
    },
    {
      user_name: 'Alex Brown',
      last_login: 'Invite Pending',
      role: ['Premium']
    },
    {
      user_name: 'Samantha Greenstein',
      last_login: '3 days ago',
      role: ['AM', 'Config Admin']
    },
    {
      user_name: 'David Hammer',
      last_login: '24 days ago',
      role: ['AM']
    },
    {
      user_name: 'Michael Maurteau',
      last_login: '24 days ago',
      role: ['PM']
    },
    {
      user_name: 'Alex Nypon',
      last_login: '4 hours ago',
      role: ['PM']
    },
    {
      user_name: 'Silvie Tells',
      last_login: '3 days ago',
      role: ['AM']
    },
    {
      user_name: 'David Wells',
      last_login: '3 days ago',
      role: ['Premium']
    },
    {
      user_name: 'Emmanuel Thioux',
      last_login: '24 days ago',
      role: ['AM']
    },
    {
      user_name: 'Patrik Maldre',
      last_login: '24 days ago',
      role: ['AM']
    },
    {
      user_name: 'Chiranjeev Dutta',
      last_login: '24 days ago',
      role: ['Config Admin']
    }
  ],
  roles = [
    {
      name: 'Configuration Administrator',
      type: 'Config Admin',
      checked: false
    },
    {name: 'Account Manager', type: 'AM', checked: false},
    {name: 'Portfolio Manager', type: 'PM', checked: false},
    {name: 'Premium User', type: 'Premium', checked: false}
  ];
