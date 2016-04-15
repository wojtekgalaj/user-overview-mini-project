import React from 'react';

import UsergroupFilter from '../usergroup-filter/usergroup-filter';
import Search from '../search/search';
import AdvancedFilter from '../advanced-filter/advanced-filter';
import Button from '../button/button';

class PageInfo extends React.Component {
  render() {
    return (
      <div className='pageInfo'>
        <h2>User overview</h2>
        <div className="controls">
          <UsergroupFilter/>
          <Search/>
          <AdvancedFilter/>
          <Button buttonText="Add user"/>

        </div>
      </div>
    )
  }
}

export default PageInfo;
