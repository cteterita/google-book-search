import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <li>
        {this.props.book.title} by {this.props.book.authors[0]}
      </li>
    );
  }
}

export default Book;