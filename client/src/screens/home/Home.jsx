import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/shared/layout/Layout';
import List from '../../components/list/List';
import LibraryLink from '../../components/home/LibraryLink';
import PantryLink from '../../components/home/PantryLink';
import { getOneList } from '../../services/lists';
import { getAllCategories } from '../../services/categories';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';
import { getAllFoods } from '../../services/foods';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
  const [categories, setCategories] = useState([])
  const [currentList, setList] = useState([]) // most recent list associated with logged in user
  const [foodBank, setFoods] = useState([]); // all foods in database
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getAllFoods();
      setFoods(data);
    }
    fetchFoods();

  }, [ updated]);

  useEffect(() => {
    if (loggedInUser?.lists !== undefined) {
      if (loggedInUser.lists.length) {
        let listId = loggedInUser.lists[loggedInUser.lists.length - 1].id
        const fetchList = async () => {
          const data = await getOneList(listId);
          setList(data);
        }
        fetchList();
      }
    }
  }, [loggedInUser, updated]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <List
        setList={setList}
        foodBank={foodBank}
        currentList={currentList}
        updated={updated}
        setUpdated={setUpdated}
        categories={categories} />
      <PantryLink />
      <LibraryLink />
    </>
  )
}

export default Home;