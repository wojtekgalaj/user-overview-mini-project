import React from 'react';

const AdvancedFilterPanel = (props) => {
  console.log('PROPS SHOWING ', props.showing);
  return (
    <div className="advanced-filter-panel"
      hidden={!props.showing}
    >
      <h1>Filters Panel</h1>
    </div>
  )
}

export default AdvancedFilterPanel;

