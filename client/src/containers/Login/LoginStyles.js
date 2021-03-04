import styled from 'styled-components';
import colors from '../../css_assets/colorVars';

const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;
    list-style-type: none;
  }

  .link {
    text-decoration: none;
    color: black; 
    margin: 0;
  }

  .login-link{
    margin: 10px;
    width: fit-content;
    padding: 5px;
  }

  .login-link:hover {
    cursor: pointer;
    border: 2px solid white;
    margin: 8px;
  }

  .icon {
    margin: 0 -15px 0 20px;
    font-size: 18px;
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

    div:nth-child(2) {
      transition-delay: .4s;
    }
    div:nth-child(3) {
      transition-delay: .8s;
    }
    div:nth-child(4) {
      transition-delay: 1.2s;
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
    justify-content: flex-end;
  }

  .right {
    margin-left: 40vw;
    justify-content: flex-start;
  }


  input:focus {
    outline: none;
  }


`

export default LoginStyles;