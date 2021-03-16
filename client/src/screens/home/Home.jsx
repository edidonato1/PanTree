import Layout from '../../components/shared/layout/Layout';
import List from '../../components/list/List';
import LibraryLink from '../../components/home/LibraryLink';
import { useEffect, useState, useContext } from 'react';
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

    if (loggedInUser?.lists !== undefined) {
      let listId = loggedInUser.lists[0].id
      const fetchList = async () => {
        const data = await getOneList(listId);
        setList(data);
      }
      fetchList();
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
    <Layout>
      <List
        foodBank={foodBank}
        currentList={currentList}
        updated={updated}
        setUpdated={setUpdated}
        categories={categories} />
      <LibraryLink
      />
    </Layout>
  )
}

export default Home;