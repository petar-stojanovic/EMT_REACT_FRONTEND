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
        BookList
      </div>
    )
  }
}

export default BookList;