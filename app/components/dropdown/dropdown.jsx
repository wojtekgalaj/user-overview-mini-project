import React from 'react';

const Dropdown = (props) => {
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown">
        <div className="currentValue">{props.selected}</div>
        <img src="app/assets/triangle.png"/>
      </div>
      <select onChange={props.selectOptions}>
        {props.renderOptions()}
      </select>
    </div>
  )
};

export default Dropdown;
