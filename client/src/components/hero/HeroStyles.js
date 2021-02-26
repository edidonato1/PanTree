import styled from 'styled-components';
import rockSalt from '../../fonts/rock_salt.ttf';
import colors from '../../css_assets/colorVars';

const HeroStyles = styled.div`
@font-face {
  font-family: 'Rock Salt';
  src: url(${rockSalt});
}

h1 {
  font-family: 'Rock Salt';
  color: ${colors.eggplant};
  position: absolute;
  right: -80px;
  top: 5%;
  font-size: 60px;
}

.hero-container {
  z-index: 2;
  position: relative;
  height: 500px;
  width: 500px;
  margin-bottom: -100px
}

.hero-dome {
  width: 500px;
  height: 500px;
  background: ${colors.paleGreen};
  background: linear-gradient(.75turn, ${colors.paleGreen}, ${colors.paleLightBlue});
  border-radius: 50%;
  position: absolute;
  z-index: 1;
}
#hero-dome-mask {
  position: absolute;
  bottom: 0;
  height: 250px;
  width: 500px;
  background: white;
  z-index: 2;
}

.under-dome {
  background: ${colors.paleLightBlue};
  background: linear-gradient(.43turn, ${colors.paleLightBlue}, ${colors.paleGreen});
  position: absolute;
  top: 250px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  border-bottom-left-radius: 100%;

  height: 90px;
  width: 60%;
}

h2 {
  margin-right: 20px;
  font-family: avenir;
  font-weight: 300;
}



`

export default HeroStyles;