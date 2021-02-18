import { useContext, useState } from 'react';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';

const Login = ({handleLogin}) => {

  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
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
      <form>
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
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Login;