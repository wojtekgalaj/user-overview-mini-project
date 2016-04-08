import React from 'react';

import './_dropdown.scss';

class Dropdown extends React.Component {
  render() {
    return (
      <select className="dropdown">
        <option value="">Filter usergroup</option>
      </select>
    )
  }
}

export default Dropdown;
