import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function LandingPage({setPageToggle}) {

  useEffect(() => {
    setPageToggle("keep it fresh.")
  }, []);

  return (
    <div>
      <Link to="/login" id="login-link">
        log in
      </Link>
      <br></br>
      <Link to="/register" id="register-link">
        sign up
      </Link>
    </div>
  )
}