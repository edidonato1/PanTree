import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const LibraryMain = styled.div`
  width: 90%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
`

const Block = styled.div`
    z-index: 3;
    position: absolute;
    right: ${props => props.right ? "0" : null};
    top: 25px;
    height: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    margin: 14px 0;
    justify-content: ${props => props.left ? "flex-end" : "flex-start"};
    background: ${props => props.button ? colors.paleGreen : colors.lightBlue};
    transition: transform 1.2s;
  `

export {
  Block,
  LibraryMain
}