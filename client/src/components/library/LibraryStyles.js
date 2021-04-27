import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const CategoryLib = styled.div`
  display: flex;
  flex-direction: column;


`
const Block = styled.div`
    z-index: 3;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 14px 0;
    justify-content: ${props => props.left ? "flex-start" : "flex-end"};
    padding: 0 25px;
    background: ${props => props.button ? colors.paleGreen : colors.lightBlue};
    transition: transform 1.2s;
`

export {
  Block,
  CategoryLib
}