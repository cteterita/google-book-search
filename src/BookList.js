import React from 'react';

import Book from './Book';

class BookList extends React.Component {
  render() {
    const books = this.props.bookList.map((book, i) => {
      return <Book book={book} id={i} />
    });
    return (
      <ul>
        {books}
      </ul>
    );
  }
}

export default BookList;