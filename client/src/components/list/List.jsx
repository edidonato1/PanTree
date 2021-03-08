import { ListStyles, ListAdd } from './ListStyles';
import { useContext, useEffect, useState } from 'react';
import { createList, addGroceryToList } from '../../services/lists';
import {LoggedInUserContext} from '../../contexts/LoggedInUser';
import { loginUser } from '../../services/auth';



const List = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  const [currentList, setList] = useState({})


  useEffect(() => {
    if (loggedInUser.lists !== undefined) {
      setList(loggedInUser.lists.length ? loggedInUser.lists[0] : {})
    }
  }, [loggedInUser]);

  return (
    <ListStyles>
      <form >
        <ListAdd />
      </form>
    </ListStyles>
  )
}

export default List;