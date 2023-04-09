const Categories = (props) => {
  return (
    <div>
      {props.categories.map((name, index) => {
        return <div key={index} className={"row m-2"}> {name}</div>
      })}
    </div>
  )
}

export default Categories