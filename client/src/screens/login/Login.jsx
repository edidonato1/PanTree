import { useState } from 'react';


const Login = ({handleLogin}) => {


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
      <h1>login</h1>
      <form onSubmit={(e => {
        e.preventDefault();
        handleLogin(formData);
      })}>
        <label>username
         <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>password
         <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">go</button>
      </form>
    </div>
  );
}

export default Login;