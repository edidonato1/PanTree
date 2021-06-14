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
    width: ${props => props.width};
    align-items: center;
    align-self: ${props => props.alignSelf};
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    font-size: ${props => props.fontSize || '20px'};
    justify-content: ${props => props.left ? "flex-end" : "flex-start"};
    padding: 0 25px;
    background: ${props => props.button ? colors.paleGreen : colors.lightBlue};
    background: ${props => props.categoryTitle && colors.paleLightBlue};
    transition: transform 1.2s;
`

const CategoryList = styled.div`

`

export {
  Block,
  CategoryLib,
  CategoryList
}