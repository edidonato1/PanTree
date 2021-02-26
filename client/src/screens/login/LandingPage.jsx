import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function LandingPage({setPageToggle}) {

  useEffect(() => {
    setPageToggle("keep it fresh.")
  }, []);

  return (
    <div className="auth">
      <Link
        to="/login"
        className="login-input left link">
        <span id="login-link">log in</span>
      </Link>
      <Link
        to="/register"
        className="login-input right link">
        <span id="register-link">sign up</span>
      </Link>
    </div>
  )
}