import React from 'react';

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
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <div className="currentValue">{this.state.selected}</div>
        </div>
        <select onChange={this.selectOption.bind(this)}>
          {this.renderOptions()}
        </select>
      </div>
    )
  }
}

export default UsergroupFilter;
