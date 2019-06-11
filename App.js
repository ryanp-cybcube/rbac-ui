import React, {Component} from 'react';

// import NavBar from './containers/NavBar';
import UserAdministration from './containers/UserAdministration';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="rbac-ui">
          {/* <NavBar /> */}
          <div className="rbac-content">
            <UserAdministration />
          </div>
        </div>
      </div>
    );
  }
}

// const cards = [
//     {key: 'total users', value: '148'},
//     {key: 'premium users', value: '72'},
//     {key: 'pm users', value: '51'},
//     {key: 'am users', value: '25'},
//     {key: 'active users', value: '146'},
//     {key: 'pending users', value: '1'}
//   ],
//   data = [
//     {
//       user_name: 'Jane Aerosmith',
//       email: 'jane_aerosmith@acmeco.com',
//       role: 'AM',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Michael Backer',
//       email: 'michael_backer@acmeco.com',
//       role: 'Premium',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Alex Brown',
//       email: 'a_brown@acmeco.com',
//       role: 'Premium',
//       last_login: 'Invite Pending'
//     },
//     {
//       user_name: 'Samantha Greenstein',
//       email: 's_greenstein@acmeco.com',
//       role: 'AM, Config Admin',
//       last_login: '3 days ago'
//     },
//     {
//       user_name: 'David Hammer',
//       email: 'david_hammer@acmeco.com',
//       role: 'AM',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Michael Maurteau',
//       email: 'michael_maurteau@acmeco.com',
//       role: 'PM',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Alex Nypon',
//       email: 'alex_nypon@acmeco.com',
//       role: 'PM',
//       last_login: '4 hours ago'
//     },
//     {
//       user_name: 'Silvie Tells',
//       email: 's_tells@acmeco.com',
//       role: 'AM',
//       last_login: '3 days ago'
//     },
//     {
//       user_name: 'David Wells',
//       email: 'david_wells@acmeco.com',
//       role: 'Premium',
//       last_login: '3 days ago'
//     },
//     {
//       user_name: 'Emmanuel Thioux',
//       email: 'emmanuel@acmeco.com',
//       role: 'AM',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Patrik Maldre',
//       email: 'patrik@acmeco.com',
//       role: 'AM',
//       last_login: '24 days ago'
//     },
//     {
//       user_name: 'Chiranjeev Dutta',
//       email: 'chiranjeev@acmeco.com',
//       role: 'AM',
//       last_login: '24 days ago'
//     }
//   ];

// <Table classNames={["dark"]} />
// <Button name="Create Modal" onClick={this.toggleModal} />
// {this.state.modal && (
//   <CreateOrgModal
//     header="Header"
//     buttonName="Submit"
//     buttonAction={this.simpleAction}
//     toggleModal={this.toggleModal}
//   />
// )}
//<InputSearchBox />
//<OptionsMenu />
//<PlusButton />
//<OrganizationsTable />
//<ActionBar>
//  <IconButton classNames={['glyphicon-trash']} name="Disable Organization" />
//  <IconButton classNames={['glyphicon-pencil']} name="Edit Organization" />
//  <IconButton classNames={['glyphicon-envelope']} name="Email Admin" />
//</ActionBar>
