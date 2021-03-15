import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const ListStyles = styled.div`
  font-family: avenir;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 20px;
  height: 600px;
  width: 300px;
  padding: 20px;
  margin: 20px;
  overflow: scroll;

  * {
    font-family: avenir;
  }
  h1 {
    margin: 0;
    color: ${colors.lightBlue};
  }

  li {
    list-style-type: none;
  }

  ul {
    padding-left: 0;
  }
`

const ListAdd = styled.input.attrs(() => ({
  type: "text",
}))`

position: absolute;
left: -20px;
border: 2px solid ${colors.lightBlue};
border-left: none;
height: 30px;
width: 82%;
text-align: right;
padding-right: 1em;
font-family: avenir;
font-size: 22px;

&:focus {
  outline: none;
}


`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;



  .button-container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 60px;
  
  }
`


const Grocery = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px 0;
  text-align: center;


  .radio {
    grid-column-start: 1;
    grid-column-end: 2;
    border-right: 1px solid black;
    border-radius: 5px;
  }

`

const GroceryItem = styled.li`
  grid-column-start: 2;
  grid-column-end: 3;
`


const Button = styled.button`
  font-size: 30px;
  width: ${props => props.add ? "fit-content" : "45px"};
  height: 45px;
  padding: 4px;
  border: 2px solid ${colors.lightBlue};
  background: none;
  margin: 8px;
  position: relative;
  color: ${colors.lightBlue};

  .hidden-name {
    display: none;
  }

  &:hover {

    background: ${colors.lightBlue};
    color: white;

    .hidden-name {
      font-family: avenir;
      color: #474747;
      font-size: 17px;
      text-align: center;
      display: block;
      position: absolute;
      bottom: -30px;
      right: 0;
      border: 1px solid gray;
      padding: 0 2px;
    }
  }
  
`

const MyList = styled.ul`
  overflow: scroll;

  .category-title {
    font-weight: bold;
    padding: 20px;
    text-align: right;
  }
`

export {
  ListStyles,
  ListAdd,
  Form,
  MyList,
  Button,
  Grocery,
  GroceryItem
}