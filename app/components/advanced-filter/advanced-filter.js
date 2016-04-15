import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/store-watch-mixin'

const getFilters = () => {
  return AppStore.getFilters()
}

const AdvancedFilter = (props) => {

    let currentClass =  props.showing ? 'advanced-filter showing' : 'advanced-filter';

    return (
      <div className={currentClass}
        onClick={AppActions.toggleFilters}
      >
        <i className="fa fa-sliders"></i>
        <span className="label">Advanced filter</span>
      </div>
    )
}

export default StoreWatchMixin(AdvancedFilter, getFilters);
