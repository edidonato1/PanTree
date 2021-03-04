import colors from '../../css_assets/colorVars';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  placeholder: props.name
}))`
  font-family: avenir;
  background: none;
  border: none;
  margin: 0 30px;
  text-align: ${props => props.align};

  ::placeholder {
    font-size: 22px;
    color: black;
    font-weight: 300;
  }
`

const Block = styled.div`
    height: 60px;
    width: 60vw;
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: ${props => props.justify};
    margin-left: ${props => props.right ? "40vw" : "none"};
    background: ${props => props.background};
    transform: ${props => props.transform};
    transition: transform 1.5s;
    transition-delay: ${props => props.delay};

    &:focus-within {
      background: ${colors.paleLightBlue};
    }
`

const Button = styled.button.attrs(() => ({
  type: "submit"
}))`
  background: none;
  width: 60px;
  margin: 10px;
  border: 2px solid ${colors.eggplant};
  font-size: 22px;
  color: ${colors.eggplant};

  &:hover {
    cursor: pointer;
    background: ${colors.eggplant};
    color: ${colors.paleGreen};
  }
`



export {Input, Block, Button}