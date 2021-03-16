import { ListStyles, ListAdd, Form, MyList, Button } from './ListStyles';
import ListItem from './ListItem';
import React, { useContext, useEffect, useState } from 'react';
import { createList, getOneList, addGroceryToList, addNewGroceryToList } from '../../services/lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon, faCarrot, faPrescriptionBottle, faToiletPaper } from '@fortawesome/free-solid-svg-icons';


const List = ({ categories, foodBank, currentList, updated, setUpdated }) => {
  const [grocery, setGrocery] = useState('') // current state of input
  const [match, setMatch] = useState(); // 
  const [isLoaded, setLoaded] = useState(false);
  const [groceryData, setGroceryData] = useState({ food_id: '' })
  const [foodData, setFoodData] = useState({
    name: '',
    category_id: ''
  })

  const icons = [faCarrot, faCarrot, faBacon, faPrescriptionBottle, faToiletPaper];

  useEffect(() => {
    if (categories.length && foodBank.length) { // avoid errors while loading foods/categories
      setTimeout((() => setLoaded(true)), 400)
    }
  }, [foodBank, categories, updated]);

  useEffect(() => {
    setMatch(foodBank.filter(f =>
      f.name.toLowerCase() === grocery.toLowerCase() // listens for input to match existing food name to avoid duplicates in db
    ))
  }, [foodBank, grocery]);

  useEffect(() => {
    if (foodData.category_id !== "" && foodData.name !== "") {
      handleNewFoodSubmit() // 
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
    if (!currentList.groceries.includes) {

    }
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
      <Form onSubmit={handleSubmit}>
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
        <div className="button-container">
          {
            !match?.length ? // input doesn't match existing food in db, so we create a new food item
              categories.map((c, i) =>
                <Button
                  style={i == 0 ? { display: "none" } : {}}
                  key={c.id}
                  onClick={
                    grocery.length ?
                      (e) => {
                        e.preventDefault();
                        setFoodData(prevState => ({
                          ...prevState,
                          category_id: c.id
                        }))
                      }
                      : null
                  }><FontAwesomeIcon icon={icons[i]} /></Button>
              )
              :
              <div className="button-containter">
                <Button add type="submit">add</Button>
              </div>
          }
        </div>
      </Form>
      <MyList>
        {
          isLoaded ?
            categories?.map(c =>
              <React.Fragment key={c.id * 1.77}>
                <li className="category-title" key={c.name}>{c.name}</li>
                <ul key={c.id * 3.45}>
                  {foodBank?.map(f =>
                    f.category_id == c.id ?
                      currentList.groceries.map(g =>
                        g.food_id == f.id ?
                          <ListItem
                            key={f.id}
                            food={f}
                            grocery={g}
                            categories={categories}
                            updated={updated}
                            setUpdated={setUpdated} />
                          : null
                      )
                      : null
                  )}
                </ul>
              </React.Fragment>
            )
            : <><h2>loading...</h2></>
        }
      </MyList>
    </ListStyles>
  )
}

export default List;
