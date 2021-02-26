import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function LandingPage({ setPageToggle }) {
  const [barEnter, setBarEnter] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setPageToggle("keep it fresh.")
    setBarEnter(false)
  }, []);

  const handleClick = (location) => {
    setBarEnter(true);
    setTimeout((() => { history.push(location) }), 1400)
  }

  return (
    <ul className="auth">
      <li
        onClick={() => handleClick('/login')}
        className="login-input left link"
        style={{
          transform: barEnter ? "translateX(-100%)" : "translateX(0)",
          transition: "1s"

        }}
      >
        <span id="login-link">log in</span>
      </li>
      <li
        onClick={() => handleClick('register')}
        className="login-input right link"
        style={{
          transform: barEnter ? "translateX(100%)" : "translateX(0)",
          transition: "1s",
          transitionDelay: ".4s"
        }}>
        <span id="register-link">sign up</span>
      </li>
    </ul>
  )
}