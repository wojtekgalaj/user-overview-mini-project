import React from 'react';
import Dropdown from '../dropdown/dropdown.jsx';

class UsergroupFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [
        'Captain', 'Colonel', 'General', 'Lieutenant', 'Officer'
      ],
      selected: 'Filter usergroup'
    }
  }

  renderOptions() {
    return this.state.options.map((item, index) => {
      return <option value={item} key={index}>{item}</option>
    })
  }

  selectOption(e) {
    this.setState({selected: e.target.value});
  }

  render() {
    return (
      <Dropdown
        selected = {this.state.selected}
        selectOptions = {this.selectOption.bind(this)}
        renderOptions = {this.renderOptions.bind(this)}
      />
    )
  }
}

export default UsergroupFilter;
