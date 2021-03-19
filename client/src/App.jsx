import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/shared/layout/Layout';
import LoginContainer from './containers/Login/LoginContainer';
import { getAllCategories } from './services/categories';
import Home from './screens/home/Home';
import Library from './screens/library/Library';
import Pantry from './screens/pantry/Pantry';
import { verifyUser } from './services/auth';
import { LoggedInUserContext } from './contexts/LoggedInUser';


function App() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setLoggedInUser(userData)
    }
    handleVerify();
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <Switch >
      <Route path="/home">
        <Layout categories={categories}>
          <Home />
        </Layout>
      </Route>
      <Route path="/library">
        <Layout categories={categories}>
          <Library categories={categories}/>
        </Layout>
      </Route>
      <Route path="/pantry">
        <Layout categories={categories}>
          <Pantry/>
        </Layout>
      </Route>
      <Route path="/" component={LoginContainer} /> {/* this stays on bottom*/}
    </Switch>
  );
}

export default App;
