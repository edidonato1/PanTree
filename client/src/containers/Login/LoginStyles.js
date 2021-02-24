import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 10vh;

  *::placeholder {
    font-size: 22px;
    color: black;
    font-weight: 300;
  }

  * {
    font-family: avenir;
    font-size: 22px;
    }

  .auth {
    display: flex;
    flex-direction: column;
    height: 30vh;
    width: 100vw;
    justify-content: space-between;
  }

  .left, .right, .go {
    z-index: 3;
  }

  @keyframes expand {
    from {
      width: 0px;
    }
    to {
      width: 60%;
    }
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

  .login-input, .button-container {
    height: 60px;
    width: 60vw;
    display: flex;
  }

  .login-input  {
    background: ${colors.lightBlue};
    animation: expand 1s ease-in-out;
  }

  .login-input:focus-within {
    background-color: ${colors.paleLightBlue};
  }


  #login-go {
    justify-content: flex-end;
  }

  .left {
    display: flex;
    justify-content: flex-end;
  }

  #login-username {
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

  #login-password {

  }

`

export default LoginStyles;