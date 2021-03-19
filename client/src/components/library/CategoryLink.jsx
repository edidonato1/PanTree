

const CategoryLink = (props) => {

  return (
    <div>
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default CategoryLink