import { useState, useEffect } from 'react';
import Hero from '../../components/hero/Hero';
export default function Register({handleRegister, setPageToggle}) {

  const [formData, setFormData] = useState({
    password: '',
    username: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true);

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


  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <label> username
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          </label>
          <label> password
        <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
        </label>
        <label> re-enter password
        <input
              type={showPassword ? "text" : "password"}
              name="password-check"
              onChange={checkPassword}
            />
        </label>
        <button type="submit">go</button>
      </form>
    </div>

  )

}