import React from 'react';

import SearchBar from './SearchBar';
import BookList from './BookList';
import Filter from './Filter';

const base_url = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyCdmiI43RswFt7cZdHSaP9oUjkwbPbfK0Q';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      filters: {
        printType: 'all',
        bookType: 'all'
      },
      searchTerm: 'Dogs'
    }
  }
  componentDidMount() {
    fetch(`${base_url}?q=${this.state.searchTerm}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const bookList = data.items.map(item => {
          return item.volumeInfo
        })
        this.setState({ bookList });
      });
  }
  render() {
    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main className='App'>
          <SearchBar />
          <Filter />
          <BookList bookList={this.state.bookList} filters={this.state.filters} />
        </main>
      </>
    );
  }
}

export default App;