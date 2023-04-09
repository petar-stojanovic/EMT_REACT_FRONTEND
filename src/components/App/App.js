import './App.css';
import React, {Component} from "react";
import Header from "../Header/header";
import {Route, Routes} from "react-router-dom";
import BookList from "../Books/BooksList/BookList";
import BooksService from "../../repository/booksRepository";
import Categories from "../Categories/Categories";
import BookAdd from "../Books/BooksAdd/BookAdd";
import BookEdit from "../Books/BooksEdit/BookEdit";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {},
    };
  }


  componentDidMount() {
    this.loadAuthors();
    this.loadCategories();
    this.loadBooks();
  }

  loadBooks = () => {
    BooksService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        });
        // console.log(data.data);
      })
  }

  loadCategories() {
    BooksService.fetchCategories()
      .then((data) => {
        this.setState({
          categories: data.data
        });
        // console.log(this.state.categories);
      })
  }

  loadAuthors() {
    BooksService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        });
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<BookList books={this.state.books}
                                                 onDelete={this.deleteBook}
                                                 onEdit={this.getBook}
                                                 onBookRent={this.rentBook}/>}/>
              <Route path="/books" element={<BookList books={this.state.books}
                                                      onDelete={this.deleteBook}
                                                      onEdit={this.getBook}
                                                      onBookRent={this.rentBook}
              />}/>
              <Route path="/books/add" element={<BookAdd books={this.state.books}
                                                         authors={this.state.authors}
                                                         categories={this.state.categories}
                                                         onAddBook={this.addBook}/>}/>
              <Route path="/books/edit/:id" element={<BookEdit authors={this.state.authors}
                                                               categories={this.state.categories}
                                                               onEdit={this.editBook}
                                                               book={this.state.selectedBook}/>}/>
              <Route path="/categories" element={<Categories categories={this.state.categories}/>}/>
            </Routes>
          </div>
        </main>
        <div className="text-center">
          Hello World!
        </div>
      </div>
    );
  }

  deleteBook = (id) => {
    BooksService.deleteBook(id)
      .then(() => {
        this.loadBooks();
      })
  }

  getBook = (id) => {
    BooksService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  rentBook = (id) => {
    BooksService.rentBook(id)
      .then(() => {
        this.loadBooks();
      })
  }

  addBook = (name, author, category, availableCopies) => {
    BooksService.addBook(name, author, category, availableCopies)
      .then(() => {
        this.loadBooks();
      })

  }

  editBook = (id, name, author, category, availableCopies) => {
    BooksService.editBook(id, name, author, category, availableCopies)
      .then(() => {
        this.loadBooks();
      })
  }

}

export default App;
