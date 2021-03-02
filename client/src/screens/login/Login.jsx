import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Login = ({ handleLogin, setPageToggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false)
  const [barEnter, setBarEnter] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setPageToggle("log in")
    setTimeout((() => { setBarEnter(true) }), 1000)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleClick = (location) => {
    setBarEnter(false);
    setTimeout((() => { history.push(location) }), 2000)
  }

  return (
    <div>
      <small className="switch">need an account? <span className="switch-link" onClick={() => handleClick('/register')}>sign up</span></small>
      <form
        className="auth"
        id="login"
        onSubmit={(e => {
          e.preventDefault();
          handleLogin(formData);
          handleClick('/')
        })}>
        <div
          className="login-input left"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(-100%)",
            transition: "1.5s"
          }}>
          <input
            className="login-left"
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div
          className="login-input right"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(100%)",
            transition: "1.5s",
            transitionDelay: ".6s"
          }}>
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div >
        <div
          className="button-container"
          id="login-go"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(-100%)",
            transition: "1.5s",
            transitionDelay: "1.2s"
          }}>
          <button type="submit">go</button>
        </div>
      </form>
    </div>
  );
}

export default Login;