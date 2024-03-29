import { useState, useContext, useEffect } from 'react';
import { LayoutMain, ListContainer, RightDiv } from './LayoutStyles';
import Nav from '../nav/Nav';
import List from '../../../components/list/List';
import { getOneList, createList } from '../../../services/lists';
import { getAllFoods } from '../../../services/foods';
import { verifyUser } from '../../../services/auth';
import { LoggedInUserContext } from '../../../contexts/LoggedInUser';

export default function Layout(props) {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  const { categories, children } = props;

  const [currentList, setList] = useState([]) // most recent list associated with logged in user
  const [foodBank, setFoods] = useState([]); // all foods in database
  const [updated, setUpdated] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getAllFoods();
      setFoods(data);
    }
    fetchFoods();

  }, [updated]);

  useEffect(() => {
    if (loggedInUser?.lists !== undefined) {
      if (loggedInUser.lists.length) {
        let listId = loggedInUser.lists[loggedInUser.lists.length - 1].id
        const fetchList = async () => {
          const data = await getOneList(listId);
          setList(data);
        }
        fetchList();
      } else {
        handleCreateList()
      }
    }
  }, [loggedInUser, updated]);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setLoggedInUser(userData)
    }
    handleVerify();
  }, [updateUser])

  const handleCreateList = async () => {
    const resp = await createList();
    const fetchList = async () => {
      const data = await getOneList(resp.id);
      setList(data);
    }
    fetchList();
    setUpdateUser(!updateUser);
  }

  return (
    <div>
      <Nav />
      <LayoutMain>
        <ListContainer>
          <List
            setList={setList}
            foodBank={foodBank}
            currentList={currentList}
            updated={updated}
            setUpdated={setUpdated}
            categories={categories}
            handleCreateList={handleCreateList}
          />
        </ListContainer>
        <RightDiv>
          {children}
        </RightDiv>
      </LayoutMain>
    </div>
  )
}