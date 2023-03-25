import React from 'react';

class BookList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      size: 20,
    }
  }

  render() {
    return (
      <div>
        {this.props.books.map(book =>{
          return <div key={book.id}>{book.name}</div>
        })}
      </div>
    )
  }
}

export default BookList;