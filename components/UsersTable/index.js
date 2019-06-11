import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilterMenu from '../../common/FilterMenu';
import InputSearchBox from '../../common/InputSearchBox';
import OptionsMenu from '../../common/OptionsMenu';
import Table from '../../common/Table';

import './styles.scss';

class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.editUser = this.editUser.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.populateTableData = this.populateTableData.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.searchUsers = this.searchUsers.bind(this);

    this.state = {
      filterBy: [],
      roles: [],
      searchInput: '',
      users: []
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    this.setState({
      roles: this.props.roles,
      users: this.props.data
    });
    // }, 1000);
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
            return user.role.some(role =>
              filterBy.length > 0 ? filterBy.includes(role) : true
            );
          })
      });
    }
  }

  editUser = event => {
    console.log(event);
  };

  filterUsers = items => {
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

  populateTableData = tableData => {
    return tableData.map((data, i) => {
      return (
        <tr key={i}>
          {Object.keys(data).map((key, j) => (
            <td key={j} className={key}>
              {Array.isArray(data[key]) && data[key].length > 1
                ? data[key].sort().join(', ')
                : data[key]}
            </td>
          ))}
          <td className="align-right">
            <OptionsMenu
              items={[
                {name: 'Edit User', onClick: this.editUser},
                {name: 'Remove User', onClick: this.removeUser},
                {name: 'Reset Password', onClick: this.resetPassword}
              ]}
            />
          </td>
        </tr>
      );
    });
  };

  resetPassword = event => {
    console.log(event);
  };

  removeUser = event => {
    console.log(event);
  };

  searchUsers = event => {
    const value = event.currentTarget.value;
    this.setState({
      searchInput: value
    });
  };

  render() {
    const {roles, users} = this.state;

    return (
      <div className="users-table-container">
        <div className="table-opts">
          <InputSearchBox
            onChange={this.searchUsers}
            placeholder="Search by name"
          />
          <FilterMenu
            items={roles}
            name="Filter Roles"
            onFilter={this.filterUsers}
          />
        </div>

        <Table
          classNames={['dark']}
          populateTableData={this.populateTableData}
          tableData={users}
          tableHeaders={[
            {name: 'User Name', key: 'user_name', sortable: true},
            {name: 'Last Login', key: 'last_login', sortable: true},
            {name: 'User Role', key: 'role', sortable: false},
            {name: '', key: '', sortable: false}
          ]}
        />
      </div>
    );
  }
}

UsersTable.propTypes = {
  data: PropTypes.array,
  roles: PropTypes.array
};

export default UsersTable;
