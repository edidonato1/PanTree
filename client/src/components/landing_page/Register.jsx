import { useState } from 'react';

export default function Register(props) {
  const { handleRegister } = props;
  const [formData, setFormData] = useState({
    password: '',
    username: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <div>
      <h1>register</h1>
      <form onSubmit={e => {
        e.preventDefault();
        handleRegister(formData);
        console.log(formData)
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
        <button type="submit">go</button>
      </form>
    </div>

  )

}