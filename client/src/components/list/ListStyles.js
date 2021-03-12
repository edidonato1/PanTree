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

export {ListStyles, ListAdd, Form, MyList}