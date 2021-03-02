import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 5vh;

  ul {
    padding: 0;
    list-style-type: none;
  }

  *::placeholder {
    font-size: 22px;
    color: black;
    font-weight: 300;
  }

  .link {
    text-decoration: none;
    color: black; 
    margin: 0;
  }

  #login-link, #register-link {
    margin: 10px;
    width: fit-content;
    padding: 5px;
  }

  #login-link:hover, #register-link:hover {
    border: 2px solid white;
    margin: 8px;
  }

  * {
    font-family: avenir;
    font-size: 22px;
    }

  .switch {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 18px;
  }

  .switch-link:hover {
    cursor: pointer;
    color: ${colors.eggplant};
  }

  .auth {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: space-between;
    height: fit-content;
  }

  .left, .right, .go {
    z-index: 3;
  }


  .button-container {
    background: ${colors.paleGreen};
  }

  button {
    background: none;
    width: 60px;
    margin: 10px 10px;
    border: 2px solid ${colors.eggplant};
    font-size: 22px;
    color: ${colors.eggplant};
  }

  #login-link {
    
  }

  .login-input, .button-container {
    height: 60px;
    width: 60vw;
    display: flex;
    align-items: center;
    margin: 20px 0;
  }

  .login-input  {
    background: ${colors.lightBlue};
  }

  .login-input:focus-within {
    background-color: ${colors.paleLightBlue};
  }


  #login-go {
    justify-content: flex-end;
  }

  button:hover {
    cursor: pointer;
    background: ${colors.eggplant};
    color: ${colors.paleGreen};
  }

  .left {
    display: flex;
    justify-content: flex-end;
  }

  .login-left {
    text-align: right;
  }

  .right {
    margin-left: 40vw;
  }

  input {
    font-family: avenir;
    background: none;
    border: none;
    margin: 0 30px;
  }

  input:focus {
    outline: none;
  }


`

export default LoginStyles;