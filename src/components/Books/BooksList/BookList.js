import React from 'react';
import {Link} from "react-router-dom";
import BookTerm from "../BookTerm/BookTerm";

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
      <div className={"container mm-4 mt-5"}>
        <div className={"row"}>
          <div className={"table-responsive"}>
            <table className={"table table-secondary table-striped"}>
              <thead>
              <tr>

                <th scope={"col"}>Name</th>
                <th scope={"col"}>Author</th>
                <th scope={"col"}>Category</th>
                <th scope={"col"}>Available copies</th>
                {/*<th scope={"col"} >Manufacturer</th>*/}
              </tr>
              </thead>
              <tbody>
              {/*{books}*/}

              {this.props.books.map((term, index) => {
                return <BookTerm key={index} term={term}
                                 onDelete={this.props.onDelete}
                                 onEdit={this.props.onEdit}
                                 onBookRent={this.props.onBookRent}/>
              })}

              </tbody>
            </table>
          </div>


          <div className="col mb-3">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    )


  }
}

export default BookList;