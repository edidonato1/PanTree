import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
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
      <Route path="/">
        <LoginContainer />
      </Route>
    </Switch>
  );
}

export default App;
