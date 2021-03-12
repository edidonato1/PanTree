import { ListStyles, ListAdd } from './ListStyles';
import React, { useContext, useEffect, useState } from 'react';
import { createList, getOneList, addGroceryToList, addNewGroceryToList } from '../../services/lists';
import { getAllFoods } from '../../services/foods';
import { getAllCategories } from '../../services/categories';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';
import { loginUser } from '../../services/auth';



const List = ({categories}) => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  const [grocery, setGrocery] = useState('') // current state of input
  const [currentList, setList] = useState([]) // most recent list associated with logged in user
  const [foodBank, setFoods] = useState([]); // all foods in database
  const [match, setMatch] = useState(); // 
  const [updated, setUpdated] = useState(false);
  const [isLoaded, setLoaded] = useState(false);


  const [groceryData, setGroceryData] = useState({ food_id: '' })

  const [foodData, setFoodData] = useState({
    name: '',
    category_id: ''
  })


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
    if (categories.length && foodBank.length) {
      setTimeout((() => setLoaded(true)), 400)
    }
  }, [foodBank, categories, updated]);

  useEffect(() => {
    setMatch(foodBank.filter(f =>
      f.name.toLowerCase() === grocery.toLowerCase()
    ))
  }, [foodBank, grocery]);

  useEffect(() => {
    if (foodData.category_id !== "" && foodData.name !== "") {
      handleNewFoodSubmit()
    }
    if (match?.length) {
      setGroceryData(prevState => ({
        ...prevState,
        food_id: match[0].id
      }))
    }
  }, [foodData, match]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await addGroceryToList(currentList.id, groceryData);
    setUpdated(!updated);
    setGroceryData({
      food_id: ''
    })
    setGrocery('');
  }

  const handleNewFoodSubmit = async () => {
    try {
      const newItem = await addNewGroceryToList(currentList.id, foodData)
      setUpdated(!updated)
      setFoodData({
        name: '',
        category_id: ''
      })
      setGrocery('')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ListStyles>
      <h1>my list</h1>
      <form onSubmit={handleSubmit}>
        <ListAdd
          value={grocery}
          onChange={(e) => {
            setFoodData(prevState => ({
              ...prevState,
              name: e.target.value
            }))
            setGrocery(e.target.value)
          }}
        />
        {
          !match?.length ?
            categories.map(c =>
              <button key={c.id} onClick={(e) => {
                e.preventDefault();
                setFoodData(prevState => ({
                  ...prevState,
                  category_id: c.id
                }))
              }
              }>{c.name}</button>
            )
            :
            <button type="submit">submit</button>
        }
      </form>
      <div>
        {
          isLoaded ?
            categories?.map(c =>
              <React.Fragment key={c.id * 1.77}>
                <h3 key={c.name}>{c.name}</h3>
                <ul key={c.id * 3.45}>
                  {foodBank?.map(f =>
                    f.category_id == c.id ?
                      currentList.groceries.map(g =>
                        g.food_id == f.id ?
                          <li key={f.id}>{f.name}</li> : null
                      )
                      : null
                  )}
                </ul>
              </React.Fragment>
            )
            : <><h2>loading...</h2></>
        }
      </div>
    </ListStyles>
  )
}

export default List;
