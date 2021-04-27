import React from "react"
import styled from 'styled-components';
import {Block} from './LibraryStyles';

const Main = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'left' ? 'row' : 'row-reverse'};
  border: 1px solid gray;
  border-radius: 20px;
  margin: 20px;
  height: 100px;
  overflow: hidden;
`

const ImgBox = styled.div`
  object-fit: cover;
  width: 200px;
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
      {orientation === 'left'
        ? <Block left >{name}</Block>
        : <Block right >{name}</Block>
      }
    </Main>
  )
}

export default CategoryLink