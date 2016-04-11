import React from 'react';
import AppStore from '../../stores/app-store'
import AdvancedFilterPanel from './advanced-filter-panel-component'

class FiltersPanel extends React.Component {
  constructor() {
    super();

    this.state = AppStore.getFilters();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    console.log('ONCHANGE');
    this.setState = AppStore.getFilters()
    console.log(this.state);
    this.render()
  }

  checkIfVisible() {
    console.log('CHECKINF', this.state.showing);
    return !this.state.showing
  }

  render() {
    console.log('STATE IN REDER ', this.state.showing);
    return (
       <AdvancedFilterPanel showing={this.checkIfVisible()}/>
    )
  }
}

export default FiltersPanel
