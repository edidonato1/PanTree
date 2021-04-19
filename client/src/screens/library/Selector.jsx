import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  list-style-type: none;
  width: 250px;
  cursor: default;

`
const Slider = styled.div`
  width: 250px;
  display: flex;
  transform: ${({selection}) => selection === "all" ? "translateX(50%)" : "translateX(0)"};
  transition:  600ms;
`

const Bar = styled.div`
  height: 3px;
  width: 100px;
  background: ${colors.lightBlue};
`
const LiContainer = styled.span`
  width: 50%;
  display: flex;
  justify-content: center;
`


const Selector = ({selection, setSelection}) => {

  return (
    <Main>
      <div style={{width: "250px"}}>
        <Ul>
          <LiContainer>
            <li onClick={() => setSelection("categories")}>
              categories
            </li>
          </LiContainer>
          <LiContainer>
            <li onClick={() => setSelection("all")}>
              all
            </li>
          </LiContainer>
        </Ul>
        <Slider selection={selection}>
          <LiContainer>
            <Bar></Bar>
          </LiContainer>
        </Slider>
      </div>
    </Main>
  )
}

export default Selector