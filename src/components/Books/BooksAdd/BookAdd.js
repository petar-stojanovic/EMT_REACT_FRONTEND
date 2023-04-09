import {useNavigate} from "react-router-dom";
import {useState} from "react";

const BookAdd = (props) => {

  // const history = useHistory();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: 1,
    category: "NOVEL",
    availableCopies: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })

  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const author = formData.author;
    const category = formData.category;
    const availableCopies = formData.copies;

    props.onAddBook(name, author, category, availableCopies);

    navigate("/", {replace: true})
  }

  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <form onSubmit={onFormSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Book name</label>
            <input type="text"
                   className="form-control"
                   id="name"
                   name="name"
                   required
                   placeholder="Enter Book name"
                   onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="quantity">Available Copies</label>
            <input type="number"
                   className="form-control"
                   id="copies"
                   name="copies"
                   placeholder="Available Copies"
                   onChange={handleChange}
                   required
            />
          </div>
          <div className="form-group my-3">
            <label>Author</label>
            <select name="author" className="form-control" onChange={handleChange}>
              {props.authors.map((author) =>
                <option key={author.id} value={author.id}>{author.name + " " + author.surname}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" className="form-control" onChange={handleChange}>
              {props.categories.map((category, index) =>
                <option key={index} value={category}>{category}</option>
              )}
            </select>
          </div>
          <button id="submit" type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BookAdd