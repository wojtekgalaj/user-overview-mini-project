import React from 'react';

const Dropdown = (props) => {
  const style = {
    width: props.width || 140
  }
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown" style={style}>
        <div className="currentValue">{props.selected}</div>
        <img src="app/assets/triangle.png"/>
      </div>
      <select onChange={props.selectOptions} style={style}>
        {props.renderOptions()}
      </select>
    </div>
  )
};

export default Dropdown;
