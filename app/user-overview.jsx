import React from 'react';
import PageInfo from './components/page-info/page-info.jsx';
import UsersTable from './components/users-table/users-table.jsx';


class UserOverview extends React.Component {
  render() {
    return (
      <div>
        <PageInfo/>
        <UsersTable/>
      </div>
    )
  }
}

export default UserOverview;
