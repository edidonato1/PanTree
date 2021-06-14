import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
  font-family: avenir;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  list-style-type: none;
  width: 250px;
  cursor: default;
  height: 20px;
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
  width: 100%;
  background: ${colors.lightBlue};
`
const LiContainer = styled.span`
  width: 50%;
  display: flex;
  justify-content: center;
  transition: 600ms;
  cursor: pointer;
  ${props => !props.sliderBar && !props.isCurrentSelection &&
`  &:hover {
    margin-bottom: -19px;
    padding-bottom: 16px;
    border-bottom: 3px solid ${colors.paleLightBlue};
  }`
}
  `


const Selector = ({selection, setSelection, setCurrentCategory}) => {

  return (
    <Main>
      <div style={{width: "250px"}}>
        <Ul>
          <LiContainer
            isCurrentSelection={selection === 'categories'}
            onClick={() => {
              setSelection("categories")
              setCurrentCategory(null)
            }}
          >
            <li >
              categories
            </li>
          </LiContainer>
          <LiContainer
            isCurrentSelection={selection === 'all'}
            onClick={() => setSelection("all")}>
            <li >
              all
            </li>
          </LiContainer>
        </Ul>
        <Slider selection={selection}>
          <LiContainer sliderBar>
            <Bar></Bar>
          </LiContainer>
        </Slider>
      </div>
    </Main>
  )
}

export default Selector