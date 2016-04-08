import React from 'react';

import './_search.scss';


class Search extends React.Component {
  render() {
    return (
      <form
        className="search"
        onSubmit={this.onSubmitHandler.bind(this)}
      >
        <input
          placeholder="Search for user"
          type="text"/>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    )
  }

  onSubmitHandler(ev) {
    ev.preventDefault();
    console.log('sewnd', this);
  }
}

export default Search;
