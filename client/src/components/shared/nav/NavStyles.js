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


  .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 38%;
    background: ${colors.paleGreen};
    min-width: 300px;
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
  margin: 0 2em 1em 0;
}

`

export default NavBar