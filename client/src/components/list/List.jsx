import { ListStyles, ListAdd } from './ListStyles';
import { useContext, useEffect, useState } from 'react';
import { createList, getOneList, addGroceryToList } from '../../services/lists';
import { getAllFoods } from '../../services/foods';
import {LoggedInUserContext} from '../../contexts/LoggedInUser';
import { loginUser } from '../../services/auth';



const List = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
  
  const [grocery, setGrocery] = useState('')
  const [currentList, setList] = useState({})
  const [foodBank, setFoods] = useState([]);
  const [match, setMatch] = useState();

  const [groceryData, setGroceryData] = useState({
    food_id: '',
    status: ''
  })

  const [foodData, setFoodData] = useState({
    name: '',
    category_id: ''
  })

  // when we add a new grocery to the list, we will search all of the foods
  // if there is no food matching that name, we need to create one and assign it a category and name
  // this new food item's id will be assigned to the new grocery item
  // if the food already exists in the db, we select that as the grocery's food_id

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
  }, [loggedInUser]);

  useEffect(() => {
    setMatch(foodBank.filter(f => 
      f.name.toLowerCase() === grocery.toLowerCase()
    ))
  }, [foodBank, grocery]);

  const handleSubmit = () => {
    // 
  }


  return (
    <ListStyles>
      <h1>my list</h1>
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