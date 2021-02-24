import { useState } from 'react';
import Hero from '../../components/hero/Hero';


const Login = ({ handleLogin }) => {


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <form onSubmit={(e => {
        e.preventDefault();
        handleLogin(formData);
      })}>
        <div className="login-input left">
          <label>username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="login-input right">
          <label>password
          <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="button-container">
          <button type="submit">go</button>
        </div>
      </form>
    </div>
  );
}

export default Login;