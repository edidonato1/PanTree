import { useEffect, useState } from 'react';
import { deleteGrocery, updateGrocery } from '../../services/groceries';
import { updateFood } from '../../services/foods';
import { Grocery, GroceryItem, Options } from './ListStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import colors from '../../css_assets/colorVars';

export default function ListItem({ grocery, categories, updated, setUpdated, food, foodBank }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [groceryData, setGroceryData] = useState({
    status: grocery.status
  });
  const [foodData, setFoodData] = useState({
    name: food.name,
    category_id: food.category_id
  })

  useEffect(() => {
    const handleChange = async () => {
      const resp = await updateGrocery(grocery.id, groceryData);
    }
    handleChange()

    const handleUpdate = async () => {
      const resp = await updateFood(food.id, foodData);
      setUpdated(!updated);
    }
    handleUpdate()

    if (!showOptions) {
      setShowCategories(false);
    }
  }, [groceryData, showOptions, foodData]);


  const handleDelete = () => {
    deleteGrocery(grocery.id)
    setUpdated(!updated);
  }

  return (
    <>
      <Grocery showOptions={showOptions}>
        <div style={{ background: groceryData.status === 2 ? colors.paleGreen : 'white' }}
          onClick={() => setGroceryData({ status: groceryData.status !== 2 ? 2 : 1 })}
          className="radio">
          {
            groceryData.status === 2
              ? <FontAwesomeIcon icon={faCheck} className="check" />
              : null
          }
        </div>
        <GroceryItem > {food.name}</GroceryItem>
        <div className="update-list-item" onClick={() => setShowOptions(!showOptions)}>
          <FontAwesomeIcon icon={faChevronDown} className="drop-down" />
        </div>
      </Grocery>
      {
        showOptions ?
          <Options showCategories={showCategories}>
            <div className="options-container">
              <li>remove <FontAwesomeIcon icon={faTimesCircle} className="remove-me" onClick={handleDelete} /></li>
              <div>
                <li className="change-category">
                  change category &nbsp;
                  	<FontAwesomeIcon
                      icon={faChevronDown}
                      className="drop-down"
                      onClick={() => setShowCategories(!showCategories)} />
                </li>
                {
                  showCategories
                    ?
                    <ul>
                      {categories.map(({name, id}) =>
                        <li
                          className="change-category-li"
                          key={id * 20.3}
                          onClick={() => setFoodData(prevState => ({
                            ...prevState,
                            category_id: id
                          }))}
                        >{name}</li>
                      )}
                    </ul>
                    : <></>
                }
              </div>
            </div>
          </Options>
          : <></>
      }
    </>
  )
}