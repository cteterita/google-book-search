import React from 'react';

import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <ul>
        <Book />
      </ul>
    );
  }
}

export default BookList;