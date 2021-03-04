import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Block, Button } from './InputStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import colors from '../../css_assets/colorVars';


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
    setTimeout((() => { setBarEnter(true) }), 500)
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
        <Block left barEnter={barEnter}>
          <Input
            type="text"
            align="right"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Block>
        <Block right barEnter={barEnter} >
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="icon"
            style={{ color: showPassword ? colors.eggplant : "black" }}
            onClick={() => setShowPassword(!showPassword)}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Block>
        <Block left
          justify="flex-end"
          barEnter={barEnter}
          margin={!passwordMatch ? "12px 0" : "14px 0"}
          style={{
            border: !passwordMatch ? "2px solid red" : "none",
            borderLeft: !passwordMatch ? "none" : "inherit",
            margin: !passwordMatch ? "18px 0" : "20px 0"
          }}>
          <Input
            type={showPassword ? "text" : "password"}
            align="right"
            name="re-enter password"
            onChange={checkPassword}
          />
        </Block>
        <Block right button barEnter={barEnter}>
          <Button>go</Button>
        </Block>
      </form>
    </div >

  )

}