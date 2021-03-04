import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.name
}))`
  display: flex;
  font-family: avenir;
  background: none;
  border: none;
  margin: 0 30px;
  justify-content: ${props => props.justify};
  margin-left: ${props => props.right ? "40vw" : "none"};

  ::placeholder {
    font-size: 22px;
    color: black;
    font-weight: 300;
  }
`

const Password = styled.input.attrs(props => {

})

export {Input}