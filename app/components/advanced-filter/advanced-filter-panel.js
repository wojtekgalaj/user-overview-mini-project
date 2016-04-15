import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import Dropdown from '../dropdown/dropdown';
import Button from '../button/button'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import _ from 'underscore';

let index;
let chosenGroup;

const getFilters = () => {
  return AppStore.getFilters();
}

const updateFilters = (data, ev) => {

  const newFilters = {
    setKey: data,
    selected: ev.target.value
  };

  AppActions.updateFilters(newFilters);
}

const renderFirstDropdown = (props) => {
  return (
    <Dropdown
      width={140}
      selected = {props.advanced.first.selected}
      selectOptions = {updateFilters.bind(this, 'first')}
      options = {getFilters().advanced.first.possible}
    />
  )
}

const secondGroup = () => {
  const filters = getFilters().advanced;
  const firstSelected = filters.first.selected;
  let options;

  index = filters.first.possible.indexOf(firstSelected);

  switch(index) {
    case -1:
      options = false;
      chosenGroup = false;
      break;
    case 0:
    case 1:
    case 2:
      options = filters.second.possible[0];
      chosenGroup = 1;
      break
    case 3:
      options = filters.second.possible[1];
      chosenGroup = 2;
      break
    case 4:
    case 5:
      options = filters.second.possible[2];
      chosenGroup = 3;
      break

  }
  return options;
}

const renderSecondDropdown = (props) => {
  const shouldShow = getFilters().advanced.first.selected !== 'Select one';
  return (
    <div
      hidden={!shouldShow}>
      <Dropdown
        width={140}
        selected = {props.advanced.second.selected}
        selectOptions = {updateFilters.bind(this, 'second')}
        options = {secondGroup()}
      />
    </div>
  )
}

const renderInput = (props) => {
  if (props.advanced.second.selected === 'Select one') {
    return <span/>
  }
  switch(chosenGroup) {
    case 1:
      return renderTextInput(props);
      break;
    case 2:
      return <span/>
      break;
    case 3:
      return renderDatepicker(props);
      break;
  }
}

const renderDatepicker = (props) => {
  const shouldShow = getFilters().advanced.second.selected !== 'Select one';
  const current = props.advanced.third.selected;
  const initWith = current && _.isObject(current) ? current : moment();
  return (
    <DatePicker
      selected={initWith}
      onChange={handleDatePickerChange.bind(this)}
    />
  )
}

const renderTextInput = (props) => {
  return (
    <input
      type="text"
      onChange={handleTextChange.bind(this)}
      value={props.advanced.third.selected}/>
  )
}

const handleDatePickerChange = (moment) => {
  const newFilters = {
    setKey: 'third',
    selected: moment
  };

  AppActions.updateFilters(newFilters);
}

const handleTextChange = (ev) => {
  const newFilters = {
    setKey: 'third',
    selected: ev.target.value
  };

  AppActions.updateFilters(newFilters);
}

const renderActionButton = (props) => {
  return (
    <Button
      buttonStyle="red"
      buttonText={<i className="fa fa-times"></i>}
    />
  )
}

const FiltersPanel = (props) => {

  return (
    <div className="advanced-filter-tablewrapper"
         hidden={!props.showing}
    >
      <table className="table filters">
        <thead>
          <tr>
            <td>
              <div className="inner">
                Advanced filters <img className="header-triangle" src="app/assets/triangle.png"/>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="filter-controls">
              <div className="inner">
                {renderFirstDropdown(props)}
                {renderSecondDropdown(props)}
                {renderInput(props)}
                {renderActionButton(props)}
              </div>
              <Button buttonText="Add row"/>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Button
                buttonStyle="green"
                buttonText="Apply"/>
              <Button
                buttonStyle="white"
                buttonText="Clear filters"/>
              <Button
                buttonStyle="warning"
                buttonText="close"/>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


export default StoreWatchMixin(FiltersPanel, getFilters)
