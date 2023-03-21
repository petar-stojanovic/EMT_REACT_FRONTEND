import axios from '../custom-axios/axios'

const BooksService = {
  fetchBooks: () => {
    return axios.get("/books");
  },

}

export default BooksService;