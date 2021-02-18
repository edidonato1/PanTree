import { Route, Switch } from 'react-router-dom';
import { loginUser, registerUser } from '../services/auth';
import Register from '../components/landing_page/Register';
import LandingPage from '../screens/login/LandingPage';
import { useEffect } from 'react';

export default function LoginContainer() {

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
      < Route exact path="/">
        <LandingPage />
      </ Route>
      <Route path="/register">
        <Register handleRegister={handleRegister}/>
      </Route>
    </Switch>
  )
}