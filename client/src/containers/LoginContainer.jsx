import { Route, Switch } from 'react-router-dom';
import { loginUser, registerUser } from '../services/auth';
import Register from '../screens/login/Register';
import Login from '../screens/login/Login';
import LandingPage from '../screens/login/LandingPage';
import { useContext } from 'react';
import { LoggedInUserContext } from '../contexts/LoggedInUser';

export default function LoginContainer() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)


  const handleLogin = async (loginData) => {
    try {
      const userData = await loginUser(loginData);
      setLoggedInUser(userData);
    } catch (e) {
      console.log(e);
    }
  }

  const handleRegister = async (registerData) => {
    try {
      const userData = await registerUser(registerData);
      console.log(userData)
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <Switch>
      <Route exact path="/">
        <LandingPage
        />
      </Route>
      <Route path="/login">
        <Login
          handleLogin={handleLogin}
        />
      </Route>
      <Route path="/register">
        <Register
          handleRegister={handleRegister}
        />
      </Route>
    </Switch>
  )
}