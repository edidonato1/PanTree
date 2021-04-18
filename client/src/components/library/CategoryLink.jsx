import React from "react"


const CategoryLink = (props) => {

  return (
    <React.Fragment>

      <div onClick={() => props.setCurrentCategory(props.category)}>
        <img style={{width: "200px"}}src={props.image} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CategoryLink