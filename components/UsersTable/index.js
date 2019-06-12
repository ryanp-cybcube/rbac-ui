import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilterMenu from '../../common/FilterMenu';
import InputSearchBox from '../../common/InputSearchBox';
import OptionsMenu from '../../common/OptionsMenu';
import Table from '../../common/Table';

import DisableUserModal from '../../components/UserModal/disableUser';
import ResetPasswordModal from '../../components/UserModal/resetPassword';
import UserModal from '../../components/UserModal/';

import './styles.scss';

class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.populateTableData = this.populateTableData.bind(this);
    this.handleOnEditUser = this.handleOnEditUser.bind(this);
    this.handleOnFilterUsers = this.handleOnFilterUsers.bind(this);
    this.handleOnDisableUser = this.handleOnDisableUser.bind(this);
    this.handleOnResetPassword = this.handleOnResetPassword.bind(this);
    this.handleOnSearchUsers = this.handleOnSearchUsers.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      filterBy: [],
      disableUserModal: false,
      editUserModal: false,
      resetPasswordModal: false,
      roles: [],
      searchInput: '',
      users: [],
      user: {}
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        roles: this.props.roles,
        users: this.props.data
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const {data} = this.props,
      {filterBy, searchInput} = this.state;

    if (
      prevState.searchInput !== searchInput ||
      !Object.is(prevState.filterBy, filterBy)
    ) {
      this.setState({
        users: data
          .filter(user => {
            return user.user_name.toLowerCase().includes(searchInput);
          })
          .filter(user => {
            return user.roles.some(role =>
              filterBy.length > 0 ? filterBy.includes(role) : true
            );
          })
      });
    }
  }

  handleOnEditUser = (firstName, lastName, emailAddress, roles) => {
    console.log('First Name', firstName);
    console.log('Last Name', lastName);
    console.log('Email Address', emailAddress);
    console.log('Roles', roles);
  };

  handleOnFilterUsers = items => {
    const {roles} = this.state;

    roles.forEach(role => {
      if (items.includes(role.type)) {
        role.checked = true;
      } else {
        role.checked = false;
      }
    });

    this.setState({
      filterBy: items,
      roles: roles
    });
  };

  handleOnDisableUser = event => {
    console.log(event);
  };

  handleOnResetPassword = event => {
    console.log(event);
  };

  handleOnSearchUsers = event => {
    const value = event.currentTarget.value;
    this.setState({
      searchInput: value
    });
  };

  populateTableData = tableData => {
    return tableData.map((data, i) => {
      return (
        <tr key={i}>
          {Object.keys(data)
            .filter(
              key =>
                key === 'user_name' || key === 'last_login' || key === 'roles'
            )
            .map((key, j) => (
              <td key={j} className={key}>
                {(() => {
                  if (Array.isArray(data[key]) && data[key].length > 1) {
                    return data[key].sort().join(', ');
                  } else if (
                    key === 'last_login' &&
                    data[key] === 'Invite Pending'
                  ) {
                    return (
                      <div>
                        {data[key]}
                        <span className="highlight">Re-send invitation</span>
                      </div>
                    );
                  }
                  return data[key];
                })()}
              </td>
            ))}
          <td className="align-right">
            <OptionsMenu
              items={[
                {
                  name: 'Reset Password',
                  onClick: this.toggleModal(data.id, 'reset')
                },
                {
                  name: 'Edit User',
                  onClick: this.toggleModal(data.id, 'edit')
                },
                {
                  name: 'Disable User',
                  onClick: this.toggleModal(data.id, 'disable')
                }
              ]}
            />
          </td>
        </tr>
      );
    });
  };

  toggleModal = (userId, actionType) => () => {
    const {
      disableUserModal,
      editUserModal,
      resetPasswordModal,
      users
    } = this.state;

    switch (actionType) {
      case 'disable':
        this.setState({
          disableUserModal: !disableUserModal
        });
        break;
      case 'edit':
        this.setState({
          editUserModal: !editUserModal
        });
        break;
      case 'reset':
        this.setState({
          resetPasswordModal: !resetPasswordModal
        });
        break;
      default:
        break;
    }

    this.setState({
      user: userId === '' ? {} : users.find(user => user.id === userId)
    });
  };

  render() {
    const {
      editUserModal,
      disableUserModal,
      resetPasswordModal,
      roles,
      users,
      user
    } = this.state;

    return (
      <div className="users-table-container">
        <div className="table-opts">
          <InputSearchBox
            onChange={this.handleOnSearchUsers}
            placeholder="Search by name"
          />
          <FilterMenu
            items={roles}
            name="Filter Roles"
            onFilter={this.handleOnFilterUsers}
          />
        </div>

        <Table
          classNames={['dark']}
          populateTableData={this.populateTableData}
          tableData={users}
          tableHeaders={[
            {name: 'User Name', key: 'user_name', sortable: true},
            {name: 'Last Login', key: 'last_login', sortable: true},
            {name: 'User Role', key: 'roles', sortable: false},
            {name: '', key: '', sortable: false}
          ]}
        />
        {editUserModal && (
          <UserModal
            isOpen={editUserModal}
            onSubmit={this.handleOnEditUser}
            toggleModal={this.toggleModal('', 'edit')}
            type="edit"
            user={user}
          />
        )}
        {disableUserModal && (
          <DisableUserModal
            isOpen={disableUserModal}
            onSubmit={this.handleOnDisableUser}
            toggleModal={this.toggleModal('', 'disable')}
            user={user}
          />
        )}
        {resetPasswordModal && (
          <ResetPasswordModal
            isOpen={resetPasswordModal}
            onSubmit={this.handleOnResetPassword}
            toggleModal={this.toggleModal('', 'reset')}
            user={user}
          />
        )}
      </div>
    );
  }
}

UsersTable.propTypes = {
  data: PropTypes.array,
  roles: PropTypes.array
};

export default UsersTable;
