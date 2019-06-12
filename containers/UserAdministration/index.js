import React, {Component} from 'react';

import Button from '../../common/Button';
import Scorecard from '../../common/Scorecard';
import UserModal from '../../components/UserModal/';
import UsersTable from '../../components/UsersTable';

import './styles.scss';

class UserAdministration extends Component {
  constructor(props) {
    super(props);

    this.handleOnAddUser = this.handleOnAddUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      modal: false
    };
  }

  handleOnAddUser = (firstName, lastName, emailAddress, roles) => {
    console.log('First Name', firstName);
    console.log('Last Name', lastName);
    console.log('Email Address', emailAddress);
    console.log('Roles', roles);
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const {modal} = this.state;

    return (
      <div className="ua-container">
        <div className="ua-header">User Administration</div>
        <div className="ua-content">
          <Scorecard cards={cards} />
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
            onSubmit={this.handleOnAddUser}
            toggleModal={this.toggleModal}
            type="add"
          />
        )}
      </div>
    );
  }
}

export default UserAdministration;

const cards = [
    {key: 'am licenses', value: '148'},
    {key: 'am activations', value: '148'},
    {key: 'pm licenses', value: '148'},
    {key: 'pm activations', value: '148'},
    {key: 'pending invitations', value: '2'},
    {key: 'password expired', value: '1'}
  ],
  data = [
    {
      id: 1,
      user_name: 'Jane Aerosmith',
      email: 'some_email@email.com',
      last_login: '3 minutes ago',
      roles: ['AM']
    },
    {
      id: 2,
      user_name: 'Michael Backer',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['Premium']
    },
    {
      id: 3,
      user_name: 'Alex Brown',
      email: 'some_email@email.com',
      last_login: 'Invite Pending',
      roles: ['Premium']
    },
    {
      id: 4,
      user_name: 'Samantha Greenstein',
      email: 'some_email@email.com',
      last_login: '3 days ago',
      roles: ['AM', 'Config Admin']
    },
    {
      id: 5,
      user_name: 'David Hammer',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['AM']
    },
    {
      id: 6,
      user_name: 'Michael Maurteau',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['PM']
    },
    {
      id: 7,
      user_name: 'Alex Nypon',
      email: 'some_email@email.com',
      last_login: '4 hours ago',
      roles: ['PM']
    },
    {
      id: 8,
      user_name: 'Silvie Tells',
      email: 'some_email@email.com',
      last_login: '3 days ago',
      roles: ['AM']
    },
    {
      id: 9,
      user_name: 'David Wells',
      email: 'some_email@email.com',
      last_login: '3 days ago',
      roles: ['Premium']
    },
    {
      id: 10,
      user_name: 'Emmanuel Thioux',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['AM']
    },
    {
      id: 11,
      user_name: 'Patrik Maldre',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['AM']
    },
    {
      id: 12,
      user_name: 'Chiranjeev Dutta',
      email: 'some_email@email.com',
      last_login: '24 days ago',
      roles: ['Config Admin']
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

// data = [
//   {
//     user_name: 'Jane Aerosmith',
//     last_login: '24 days ago',
//     role: ['AM']
//   },
//   {
//     user_name: 'Michael Backer',
//     last_login: '24 days ago',
//     role: ['Premium']
//   },
//   {
//     user_name: 'Alex Brown',
//     last_login: 'Invite Pending',
//     role: ['Premium']
//   },
//   {
//     user_name: 'Samantha Greenstein',
//     last_login: '3 days ago',
//     role: ['AM', 'Config Admin']
//   },
//   {
//     user_name: 'David Hammer',
//     last_login: '24 days ago',
//     role: ['AM']
//   },
//   {
//     user_name: 'Michael Maurteau',
//     last_login: '24 days ago',
//     role: ['PM']
//   },
//   {
//     user_name: 'Alex Nypon',
//     last_login: '4 hours ago',
//     role: ['PM']
//   },
//   {
//     user_name: 'Silvie Tells',
//     last_login: '3 days ago',
//     role: ['AM']
//   },
//   {
//     user_name: 'David Wells',
//     last_login: '3 days ago',
//     role: ['Premium']
//   },
//   {
//     user_name: 'Emmanuel Thioux',
//     last_login: '24 days ago',
//     role: ['AM']
//   },
//   {
//     user_name: 'Patrik Maldre',
//     last_login: '24 days ago',
//     role: ['AM']
//   },
//   {
//     user_name: 'Chiranjeev Dutta',
//     last_login: '24 days ago',
//     role: ['Config Admin']
//   }
// ],
