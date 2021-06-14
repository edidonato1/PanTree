import { Block } from './LibraryStyles'
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Category({ category, currentFoods }) {

  return (
    <Main>
      <Block
        categoryTitle
        alignSelf="flex-end"
        marginRight="-20px"
        width="80%"
        right>{category.name}
      </Block>
      <div>
        {currentFoods.map(food => (
          <div>
            {food.name}
          </div>
        ))}
      </div>
    </Main>
  )
}