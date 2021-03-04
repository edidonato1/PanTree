import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function LandingPage({ setPageToggle }) {
  const [barEnter, setBarEnter] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setPageToggle("keep it fresh.")
    setTimeout((() => {setBarEnter(true);}), 1000)
  }, []);

  const handleClick = (location) => {
    setBarEnter(false);
    setTimeout((() => { history.push(location) }), 2000)
  }

  return (
    <ul className="auth">
      <li
        onClick={() => handleClick('/login')}
        className="login-input left"
        style={{
          transform: barEnter ?  "translateX(0)" : "translateX(-100%)",
          transition: "1.5s"
        }}
      >
        <span id="login-link">log in</span>
      </li>
      <li
        onClick={() => handleClick('register')}
        className="login-input right"
        style={{
          transform: barEnter ? "translateX(0)" : "translateX(100%)" ,
          transition: "1.5s",
          transitionDelay: ".6s"
        }}>
        <span id="register-link">sign up</span>
      </li>
    </ul>
  )
}