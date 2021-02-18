import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function LandingPage(props) {
  const { handleLogin, handleRegister } = props;


  return (
    <div>
      <div className="hero">
        {/* hero logo goes here */}
      </div>
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