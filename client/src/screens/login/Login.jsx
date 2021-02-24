import { useState, useEffect } from 'react';
import Hero from '../../components/hero/Hero';


const Login = ({ handleLogin, setPageToggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setPageToggle("log in")
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <form
        className="auth"
        id="login"
        onSubmit={(e => {
        e.preventDefault();
        handleLogin(formData);
      })}>
        <div className="login-input left">
          <input
            id="login-username"
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-input right">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="button-container" id="login-go">
          <button type="submit">go</button>
        </div>
      </form>
    </div>
  );
}

export default Login;