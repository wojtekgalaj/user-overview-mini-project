import React from 'react';

class Dropdown extends React.Component {
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
      console.log(index)
      return <option value="{item}" key={index}>{item}</option>
    })
  }

  selectOption(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <span>{this.state.selected}</span>
        </div>
        <select onChange={this.selectOption.bind(this)}>
          {this.renderOptions()}
        </select>
      </div>
    )
  }
}

export default Dropdown;
