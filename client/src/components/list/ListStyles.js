import styled from 'styled-components';

const ListStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 20px;
  height: 600px;
  width: 300px;
  padding: 20px;
  margin: 20px;
`

const ListAdd = styled.input.attrs(() => ({
  type: "text",
}))`

`


export {ListStyles, ListAdd}