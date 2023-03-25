import './App.css';
import React, {Component} from "react";
import Header from "../Header/header";
import {Route, Routes} from "react-router-dom";
import BookList from "../Books/BooksList/BookList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  render() {


    return (
      <div>
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<BookList/>}/>
              <Route path="/books" element={<BookList/>}/>
            </Routes>
          </div>
        </main>
        <div className="text-center">
          Hello World!
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("");
  }

}

export default App;
