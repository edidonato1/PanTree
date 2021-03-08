import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Block, Button } from './InputStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import colors from '../../css_assets/colorVars'


const Login = ({ handleLogin, setPageToggle, barEnter, setBarEnter }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setPageToggle("log in")
    setTimeout((() => { setBarEnter(true) }), 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (location) => {
    setBarEnter(false);
    setTimeout((() => { history.push(location) }), 1800);
  };

  return (
    <div>
      <small className="switch">need an account? <span className="switch-link" onClick={() => handleClick('/register')}>sign up</span></small>
      <form
        className="auth"
        id="login"
        onSubmit={(e => {
          e.preventDefault();
          handleLogin(formData);
        })}>
        <Block left barEnter={barEnter}>
          <Input
            type="text"
            align="right"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Block>
        <Block right barEnter={barEnter}>
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
        <Block left button barEnter={barEnter} >
          <Button >go</Button>
        </Block>
      </form>
    </div>
  );
}

export default Login;