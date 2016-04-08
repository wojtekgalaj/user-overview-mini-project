import React from 'react';

import Dropdown from '../dropdown/dropdown.jsx';
import Search from '../search/search.jsx';

class PageInfo extends React.Component {
  render() {
    return (
      <div className='pageInfo'>
        <h2>User overview</h2>
        <div className="controlls">
          <Dropdown/>
          <Search/>
        </div>
      </div>
    )
  }
}

export default PageInfo;
