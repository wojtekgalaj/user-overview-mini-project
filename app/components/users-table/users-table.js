import React from 'react';

import Pagination from '../pagination/pagination';
import Table from '../table/table';

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
