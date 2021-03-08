import { ListStyles, ListAdd } from './ListStyles';
import { useContext, useEffect, useState } from 'react';
import { createList, addGroceryToList } from '../../services/lists';
import { getAllFoods } from '../../services/foods';
import {LoggedInUserContext} from '../../contexts/LoggedInUser';
import { loginUser } from '../../services/auth';



const List = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
  
  const [grocery, setGrocery] = useState('')
  const [currentList, setList] = useState({})
  const [foodBank, setFoods] = useState([]);
  const [match, setMatch] = useState();



  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getAllFoods();
      setFoods(data);
    }
    fetchFoods();
    if (loggedInUser.lists !== undefined) {
      setList(loggedInUser.lists.length ? loggedInUser.lists[0] : {})
    }
  }, [loggedInUser]);

  useEffect(() => {
    setMatch(foodBank.filter(f => 
      f.name.toLowerCase() === grocery.toLowerCase()
    ))
  }, [foodBank, grocery]);


  return (
    <ListStyles>
      <form >
        <ListAdd
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />
      </form>
    </ListStyles>
  )
}

export default List;