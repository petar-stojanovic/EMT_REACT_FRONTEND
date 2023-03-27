import './App.css';
import React, {Component} from "react";
import Header from "../Header/header";
import {Route, Routes} from "react-router-dom";
import BookList from "../Books/BooksList/BookList";
import BooksService from "../../repository/booksRepository";
import Categories from "../Categories/Categories";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        });
        console.log(data.data);
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<BookList books={this.state.books}/>}/>
              <Route path="/books" element={<BookList books={this.state.books}/>}/>
              <Route path="/categories" element={<Categories books={this.state.books}/>}/>
            </Routes>
          </div>
        </main>
        <div className="text-center">
          Hello World!
        </div>
      </div>
    );
  }
}

export default App;
