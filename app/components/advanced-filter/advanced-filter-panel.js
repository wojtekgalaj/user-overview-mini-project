import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/store-watch-mixin'

const getFilters = () => {
  return AppStore.getFilters();
}

const FiltersPanel = (props) => {
    return (
      <div
        hidden={!props.showing}
        className="advanced-filter-panel">
        <h1>Filters Panel</h1>
      </div>
    )
}

export default StoreWatchMixin(FiltersPanel, getFilters)
