import styled from 'styled-components';
import colors from '../../../css_assets/colorVars';

const LayoutMain = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  overflow-x: scroll;
  padding-top: 90px;
`

const ListContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow-y: visible;
  /* background: green; */
`

const RightDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 20px 0;

  overflow-y: scroll;

  /* background: green; */
`

export {
  LayoutMain,
  ListContainer,
  RightDiv
}