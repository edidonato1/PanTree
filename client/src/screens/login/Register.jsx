import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import colors from '../../css_assets/colorVars'


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
    setTimeout((() => { setBarEnter(true) }), 1000)
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
      <small className="switch">already have an account?
        <span className="switch-link" onClick={() => handleClick('/login')}> log in</span>
      </small>
      <form
        className="auth"
        onSubmit={e => {
          e.preventDefault();
          handleRegister(formData);
        }}>
        <div
          className="login-input left"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 1.5s"
          }}
        >
          <input
            className="login-left"
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div
          className="login-input right"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(100%)",
            transition: "transform 1.5s",
            transitionDelay: ".6s"
          }}>
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="icon"
            style={{color: showPassword ? colors.eggplant : "black"}}
            onClick={() => setShowPassword(!showPassword)}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}

          />
        </div>
        <div
          className="login-input left"
          style={{
            transform: barEnter ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 1.5s",
            transitionDelay: "1.2s",
            border: !passwordMatch ? "2px solid red" : "none",
            margin: !passwordMatch ? "18px 0" : "20px 0",
            borderLeft: !passwordMatch ? "none" : "inherit"
          }}>
          <input
            className="login-left"
            placeholder="re-enter password"
            type={showPassword ? "text" : "password"}
            name="password-check"
            onChange={checkPassword}
          />
        </div>
        <div className="button-container right">
          <button type="submit">go</button>
        </div>
      </form>
    </div>

  )

}