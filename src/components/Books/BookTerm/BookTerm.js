import {Link} from "react-router-dom";


const BookTerm = (props) => {

  return (
    <tr>
      <td>{props.term.name}</td>
      <td>{`${props.term.author.name} ${props.term.author.surname}`}</td>
      <td>{props.term.category}</td>
      <td>{props.term.availableCopies}</td>
      <td className={""}>
        {/*<a title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.term.id)} href="/books">*/}
        {/*  Delete*/}
        {/*</a>*/}
        <Link to={"/"} title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.term.id)}>
          Delete
        </Link>
        <Link className={"btn btn-primary mx-2"}
              onClick={() => props.onEdit(props.term.id)}
              to={`/books/edit/${props.term.id}`}>
          Edit
        </Link>
        {props.term.availableCopies > 0 && <Link className={"btn btn-dark"}
                                                 onClick={() => props.onBookRent(props.term.id)}
                                                 to={`/`}>
          Mark as Taken
        </Link>}
        {props.term.availableCopies <= 0 && <span>
          No more copies
        </span>}

      </td>
    </tr>
  )
}

export default BookTerm