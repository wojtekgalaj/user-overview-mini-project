import React from 'react';

import Pagination from '../pagination/pagination.jsx';
import Table from '../table/table.jsx';

class UsersTable extends React.Component {
  render() {
    return (
      <div>
        <Pagination/>
        <Table/>
      </div>
    )
  }
}

export default UsersTable;
