import React from 'react';
import AppStore from '../../stores/app-store'

class FiltersPanel extends React.Component {
  constructor() {
    super();

    this.state = AppStore.getFilters();
    console.log(this.state);
  }

  render() {
    return (
      <div className="advanced-filter-panel">
        <h1>Filters Panel</h1>
      </div>
    )
  }
}

export default FiltersPanel
