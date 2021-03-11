import { ListStyles, ListAdd } from './ListStyles';
import React, { useContext, useEffect, useState } from 'react';
import { createList, getOneList, addGroceryToList, addNewGroceryToList } from '../../services/lists';
import { getAllFoods } from '../../services/foods';
import { getAllCategories } from '../../services/categories';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';
import { loginUser } from '../../services/auth';



const List = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  const [categories, setCategories] = useState([])
  const [grocery, setGrocery] = useState('')
  const [currentList, setList] = useState([])
  const [foodBank, setFoods] = useState([]);
  const [match, setMatch] = useState();
  const [updated, setUpdated] = useState(false);
  const [isLoaded, setLoaded] = useState(false);


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
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    }
    fetchCategories();
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
  }, [foodData]);

  const handleSubmit = () => {

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
            <button>submit</button>
      }
      </form>
      <div>
        {
          isLoaded ?
            categories?.map(c =>
              <React.Fragment>
                <h3>{c.name}</h3>
                  {foodBank?.map(f =>
                    f.category_id == c.id ?
                      currentList.groceries.map(g =>
                        g.food_id == f.id ?
                          <li>{f.name}</li> : <></>
                      )
                      : <></>
                  )}
              </React.Fragment>
            )
            : <><h2>loading...</h2></>
        }
      </div>
    </ListStyles>
  )
}

export default List;
