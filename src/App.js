import React from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main className='App'>
          <SearchBar />
          <BookList />
        </main>
      </>
    );
  }
}

export default App;