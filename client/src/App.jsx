import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/Login/LoginContainer';
import Home from './screens/home/Home';
import { verifyUser } from './services/auth';
import { LoggedInUserContext } from './contexts/LoggedInUser';

function App() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setLoggedInUser(userData)
    }
    handleVerify();
  }, [])

  return (
    <Switch >
      <Route path="/home">
        <Home />
      </Route>
      <Route  path="/" component={LoginContainer}/> {/* this stays on bottom*/}
    </Switch>
  );
}

export default App;
