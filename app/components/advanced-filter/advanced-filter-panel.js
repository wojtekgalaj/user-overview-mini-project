import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import Dropdown from '../dropdown/dropdown';

const getFilters = () => {
  return AppStore.getFilters();
}

const noop = () => {
  console.log(arguments);
}

const selectOption = (props, which) => {
  console.log(props);
  // AppActions.setAdvancedOption()
}

const FiltersPanel = (props) => {
    // const notab = (
    //   <div
    //     hidden={!props.showing}
    //     className="advanced-filter-panel">
    //     <div className="header">
    //       <h2>Advanced Filter</h2>
    //     </div>
    //     <div className="panel">
    //       <Dropdown
    //         width={120}
    //         selected = {props.advanced.first.selected}
    //         selectOptions = {selectOption(props, 'first')}
    //         options = {getFilters().advanced.first.possible}
    //       />
    //     </div>
    //     <div className="controls"></div>
    //   </div>
    // )

  return (
    <div className="tableWrapper"
         hidden={!props.showing}
    >
      <table className="table filters">
        <thead>
          <tr>
            <td>Advanced filters</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Dropdown
                width={120}
                selected = {props.advanced.first.selected}
                selectOptions = {selectOption(props, 'first')}
                options = {getFilters().advanced.first.possible}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><button>Apply</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


export default StoreWatchMixin(FiltersPanel, getFilters)
