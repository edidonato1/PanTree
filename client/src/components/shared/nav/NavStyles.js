import styled from 'styled-components';
import colors from '../../../css_assets/colorVars';
import rockSalt from '../../../fonts/rock_salt.ttf'

const NavBar = styled.nav`

@font-face {
  font-family: 'Rock Salt';
  src: url(${rockSalt});
}

  height: 80px;
  width: 100vw;
  display: flex;
  background: ${colors.eggplant};
  position: fixed;
  z-index: 4;



  .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 38%;
    background: ${colors.paleGreen};
    min-width: 350px;
    color: ${colors.eggplant};

  }

  .logo-container {
    font-family: 'Rock Salt';
    margin-left: 2em;
  }

  #logo {
    text-decoration: none;
    font-size: 30px;
    color: ${colors.eggplant};

  }

  #username {
    margin: 0 3em 1em 0;
    cursor: default;

    &:hover {
      border: 2px solid ${colors.eggplant};
      border-radius: 10px;
      margin-bottom: Calc(1em - 6px);
      margin-right: Calc(3em - 6px);
      padding: 4px;
    }
    
  }

  #username-top {
    background: ${colors.paleGreen};
    width: fit-content;
    height: fit-content;
    z-index: 8;
  }

  #sign-out {
    position: absolute;
    z-index: ${({hover }) => hover ? "0" : "-1"};
    transform: translateX(${({ hover }) => hover ? "10px" : "-20px"});
    
    &:hover {
      font-size: 20px;
      margin-top: -2px;
    }

    transition: .3s;
  }


  .nav-right {
    display: flex;
    align-items: flex-end;

  }

  .nav-link {
    text-decoration: none;
    text-align: center;
    margin: 0 1em;
    padding-bottom: 1em;
    color: ${colors.paleGreen};
    width: 5em;
  }

  .link-box {
    border-bottom: 5px solid ${colors.paleGreen};
    padding: Calc(1em - 5px);
  }

  #home-link {
    margin-left: 0;
  }
`

export default NavBar