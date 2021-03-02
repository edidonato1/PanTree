import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



export default function Register({ handleRegister, setPageToggle }) {

  const [formData, setFormData] = useState({
    password: '',
    username: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [barEnter, setBarEnter] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setPageToggle("sign up")
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const checkPassword = e => {
    let passwordCheck = e.target.value;
    setPasswordMatch(
      passwordCheck !== formData.password && passwordCheck.length ? false : true
    )
  }

  const handleClick = (location) => {
    setBarEnter(false);
    setTimeout((() => { history.push(location) }), 2000)
  }


  return (
    <div>
      <small className="switch">need an account? <span className="" onClick={() => handleClick('/register')}>sign up</span></small>
      <form
        className="auth"
        onSubmit={e => {
          e.preventDefault();
          handleRegister(formData);
        }}>
        <div className="login-input left">
          <input
            className="login-left"
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-input right">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-input left">
          <input
            className="login-left"
            placeholder="re-enter password"
            type={showPassword ? "text" : "password"}
            name="password-check"
            onChange={checkPassword}
          />
        </div>
        <div
          className="button-container"
          id="login-go">
          <button type="submit">go</button>
        </div>
      </form>
    </div>

  )

}