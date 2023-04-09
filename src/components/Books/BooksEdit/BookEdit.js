import {useNavigate} from "react-router-dom";
import {useState} from "react";

const BookEdit = (props) => {

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
    const name = formData.name !== "" ? formData.name : props.book.name;
    const author = formData.author !== 1 ? formData.author : props.book.author.id;
    const category = formData.category !== "NOVEL" ? formData.category : props.book.category;
    const availableCopies = formData.copies !== 0 ? formData.copies : props.book.availableCopies;

    props.onEdit(props.book.id, name, author, category, availableCopies);

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
                   placeholder={props.book.name}
                   onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="copies">Available Copies</label>
            <input type="number"
                   className="form-control"
                   id="copies"
                   name="copies"
                   placeholder={props.book.availableCopies}
                   onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <label>Author</label>
            <select name="author" className="form-control" onChange={handleChange}>
              {props.authors.map((author) => {

                  if (props.book.author !== undefined && props.book.author.id === author.id) {
                    return <option key={author.id} selected={props.book.author.id}
                                   value={author.id}>{author.name + " " + author.surname}</option>
                  }
                  return <option key={author.id} value={author.id}>{author.name + " " + author.surname}</option>
                }
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" className="form-control" onChange={handleChange}>
              {props.categories.map((category, index) => {

                  if (props.book.category !== undefined && props.book.category === category) {
                    return <option key={index} selected value={category}>{category}</option>
                  }
                  return <option key={index} value={category}>{category}</option>
                }
              )}
            </select>
          </div>
          <button id="submit" type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BookEdit