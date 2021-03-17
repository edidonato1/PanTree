import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/shared/layout/Layout';
import LoginContainer from './containers/Login/LoginContainer';

import Home from './screens/home/Home';
import Library from './screens/library/Library';
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
      <Layout>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Layout>
      <Route path="/" component={LoginContainer} /> {/* this stays on bottom*/}
    </Switch>
  );
}

export default App;
