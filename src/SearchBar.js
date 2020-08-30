import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' }
  searchChanged(searchTerm) {
    this.setState({ searchTerm });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input 
          id="searchTerm" 
          placeholder="Search by title or author"
          value={this.state.searchTerm}
          onChange={e => this.searchChanged(e.target.value)} 
          required/>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;