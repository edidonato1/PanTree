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
    z-index: 3;
    height: 50px;
    width: 60vw;
    display: flex;
    align-items: center;
    margin: 14px 0;
    justify-content: ${props => props.left ? "flex-end" : "flex-start"};
    margin-left: ${props => props.right ? "40vw" : "none"};
    background: ${props => props.button ? colors.paleGreen : colors.lightBlue};
    transform: ${props => ({barEnter}) => barEnter ? "translateX(0%)" : props.left ? "translateX(-100%)" : "translateX(100%)"};
    transition: transform 1.2s;

    &:focus-within {
      background: ${props => props.button ? colors.paleGreen : colors.paleLightBlue};
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



export {
  Input,
  Block,
  Button
}