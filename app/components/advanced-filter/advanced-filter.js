import React from 'react';
import AppActions from '../../actions/app-actions';

class AdvancedFilter extends React.Component {
  render() {
    return (
      <div className="advanced-filter"
        onClick={AppActions.toggleFilters}
      >
        <i className="fa fa-sliders"></i>
        <span className="label">Advanced filter</span>
      </div>
    )
  }
}

export default AdvancedFilter;
