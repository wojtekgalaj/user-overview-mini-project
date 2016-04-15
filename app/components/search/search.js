import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form
        className="search"
        onSubmit={this.onSubmitHandler.bind(this)}>
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
  }
}

export default Search;
