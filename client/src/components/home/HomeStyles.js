import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const HomeLink = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  width: 100%;
  min-width: 500px;
  max-width: 700px;
  height: 400px;
  position: relative;
  margin: 20px 0 0 1px;
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

  &:focus-within {
    background: ${props => props.button ? colors.paleGreen : colors.paleLightBlue};
  }

  .title-link {
    font-family: avenir;
    font-weight: 400;
    margin: 10px;
    padding: 0 5px;
      &:hover {
      cursor: pointer;
      border: 2px solid white;
      margin: 8px;
      }
  }

`

const BottomDiv = styled.div`
  display: flex;
  justify-content: ${props => props.imageRight ? "flex-end" : "flex-start"};
  height: 67%;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;

  .bottom-text {
    display: flex;
    flex-direction: column;
    padding: 10%;
    justify-content: space-evenly;
  }

  hr {
    width: 200%;
    max-width: 180px;
    margin-left: -30%;
    color: black;
    border-top: .5px solid gray;
    border-bottom: none;
  }

  a {
    padding: 10% 0;
    text-decoration: none;
    font-family: avenir;
    color: ${colors.eggplant};
    font-weight: 500;

  }


  `

const Image = styled.img`
  width: 60%;
  object-fit: cover;
  filter:  contrast(60%) hue-rotate(10deg) sepia(10%) opacity(90%);
  border-bottom-right-radius: ${props => props.left ? null : "inherit"};
  border-bottom-left-radius: ${props => props.right ? null : "inherit"};
`

export {
  HomeLink,
  Block,
  BottomDiv,
  Image
}