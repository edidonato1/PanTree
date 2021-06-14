import React from "react"
import styled from 'styled-components';
import {Block} from './LibraryStyles';

const Main = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'left' ? 'row' : 'row-reverse'};
  border: 1px solid gray;
  border-radius: 20px;
  margin: 20px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
`

const ImgBox = styled.div`
  object-fit: cover;
  width: 200px;
`

const BlockTitleContainer = styled.span`
font-size: 22px;
font-family: avenir;
font-weight: 300;
cursor: pointer;
  &:hover {
    border: 2px solid white;
    padding: 5px;
    margin: -7px;
  }
`

const Img = styled.img`
  width: 100%;

`
const CategoryLink = ({
  orientation,
  category,
  setCurrentCategory,
  image,
  name
}) => {



  return (
    <Main orientation={orientation}>
      <ImgBox>
        <Img
          orientation={orientation}
          src={image}
          alt={name}
          />
        </ImgBox>
      {orientation === 'right'
        ? <Block
            left
            width="50%"
          >
            <BlockTitleContainer onClick={() => setCurrentCategory(name)}>
              {name}
            </BlockTitleContainer>
        </Block>
        : <Block
            right
            width="50%"
          >
            <BlockTitleContainer onClick={() => setCurrentCategory(name)}>
              {name}
            </BlockTitleContainer>
        </Block>
      }
    </Main>
  )
}

export default CategoryLink