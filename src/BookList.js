import React from 'react';

import Book from './Book';

class BookList extends React.Component {
  render() {
    const books = this.props.bookList.map((book, i) => {
      return <Book book={book} key={i} />
    });
    return (
      <div>
        <p>Books matching {this.props.searchTerm} </p>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

export default BookList;