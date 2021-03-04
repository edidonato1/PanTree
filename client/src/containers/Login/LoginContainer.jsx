import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { loginUser, registerUser } from '../../services/auth';
import Register from '../../screens/login/Register';
import Login from '../../screens/login/Login';
import LandingPage from '../../screens/login/LandingPage';
import { useContext, useState } from 'react';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';
import LoginStyles from './LoginStyles'
import Hero from '../../components/hero/Hero';

export default function LoginContainer(props) {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  const [pageToggle, setPageToggle] = useState('keep it fresh')
  const [barEnter, setBarEnter] = useState(false);

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
    <>
      <Hero
        pageToggle={pageToggle}
        barEnter={barEnter}
        setBarEnter={setBarEnter}/>
      <LoginStyles>
        <Switch>
          <Route exact path="/">
            <LandingPage
              setPageToggle={setPageToggle}
              barEnter={barEnter}
              setBarEnter={setBarEnter}
            />
          </Route>
          <Route path="/login">
            <Login
              handleLogin={handleLogin}
              setPageToggle={setPageToggle}
              barEnter={barEnter}
              setBarEnter={setBarEnter}
            />
          </Route>
          <Route path="/register">
            <Register
              handleRegister={handleRegister}
              setPageToggle={setPageToggle}
              barEnter={barEnter}
              setBarEnter={setBarEnter}
            />
          </Route>
        </Switch>
      </LoginStyles>
    </>
  )
}