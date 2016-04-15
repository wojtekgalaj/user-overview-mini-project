import React from 'react';

const renderOptions = (options) => {
  if (!options) return <option>NULL</option>
  return options.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
}

const Dropdown = (props) => {
  const style = {
    width: props.width || 140
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown" style={style}>
        <div className="current-value">{props.selected}</div>
        <img src="app/assets/triangle.png"/>
      </div>
      <select onChange={props.selectOptions} style={style}>
        {renderOptions(props.options)}
      </select>
    </div>
  )
};

export default Dropdown;
