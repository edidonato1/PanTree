import { Link } from 'react-router-dom';
import { useState } from 'react';
import Hero from '../../components/hero/Hero'


export default function LandingPage(props) {


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