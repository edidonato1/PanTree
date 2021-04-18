import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const CategoryLib = styled.div`
  display: flex;
  flex-direction: column;
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
`

export {
  Block,
  CategoryLib
}