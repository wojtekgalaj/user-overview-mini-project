import React from 'react';
import Dropdown from '../dropdown/dropdown.jsx';


class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      pagination: {
        options: ['10 Rows', '50 Rows', '100 Rows'],
        selected: '10 Rows'
      }
    }
  }

  renderOptions() {
    return this.state.pagination.options.map((item, index) => {
      return <option value={item} key={index}>{item}</option>
    })
  }

  selectOption(e) {
    this.setState({
      pagination: {
        options: ['10 Rows', '50 Rows', '100 Rows'],
        selected: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="paginationWrapper">
        <div className="results">
          <label htmlFor="results">Results: </label>
          <span id="results">1337</span>
        </div>
        <div className="controls">
          <div className="pagination">
            <div className="paginators inactive">
              <span className="paginators-first">First</span>
              <span className="paginators-separator">—</span>
              <span className="paginators-prev">Previous</span>
            </div>
            <div className="pagination-pager">
              <span>Page</span>
              <div className="pager"><span>1</span></div>
              <span>of 99</span>
            </div>
            <div className="paginators">
              <span className="paginators-next">Next</span>
              <span className="paginators-separator">—</span>
              <span className="paginators-last">Last</span>
            </div>
          </div>
          <div className="options">
            <Dropdown
              width={80}
              selected = {this.state.pagination.selected}
              selectOptions = {this.selectOption.bind(this)}
              renderOptions = {this.renderOptions.bind(this)}
            />
          </div>
        </div>
        </div>
    );
  }
};
export default Pagination;

