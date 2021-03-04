import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Block } from './InputStyles';
import colors from '../../css_assets/colorVars';


export default function LandingPage({ setPageToggle, barEnter, setBarEnter }) {

  const history = useHistory();

  useEffect(() => {
    setPageToggle("keep it fresh.")
    setTimeout((() => { setBarEnter(true); }), 1000)
  }, []);

  const handleClick = (location) => {
    setBarEnter(false);
    setTimeout((() => { history.push(location) }), 1400)
  }

  return (
    <ul className="auth">
      <Block left barEnter={barEnter}>
        <li className="login-link" onClick={() => handleClick('/login')} >
          log in
        </li>
      </Block>
      <Block right barEnter={barEnter}>
        <li className="login-link" onClick={() => handleClick('register')}> 
          sign up
        </li>
      </Block>
    </ul>
  )
}