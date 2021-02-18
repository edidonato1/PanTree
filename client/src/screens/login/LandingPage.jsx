import { Link } from 'react-router-dom';

export default function LandingPage() {
  
  return (
    <div>
      <div className="hero">
        {/* hero logo goes here */}
      </div>
      <Link id="login-link">
        log in
      </Link>
      <Link to="/register" id="register-link">
        sign up
      </Link>
    </div>
  )
}