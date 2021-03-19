

const CategoryLink = (props) => {

  return (
    <div onClick={() => props.setCurrentCategory(props.category)}>
      <img style={{width: "200px"}}src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default CategoryLink