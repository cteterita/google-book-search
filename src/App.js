import React from 'react';

import SearchBar from './SearchBar';
import BookList from './BookList';
import Filter from './Filter';

const url = '';
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
    }
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
          <BookList />
        </main>
      </>
    );
  }
}

export default App;