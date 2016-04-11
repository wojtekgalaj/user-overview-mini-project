import React from 'react';
import PageInfo from './components/page-info/page-info';
import UsersTable from './components/users-table/users-table';
import FiltersPanel from './components/advanced-filter/advanced-filter-panel'


class UserOverview extends React.Component {
  render() {
    return (
      <div>
        <PageInfo/>
        <FiltersPanel/>
        <UsersTable/>
      </div>
    )
  }
}

export default UserOverview;
