import { useEffect, useState } from 'react';
import { getOneGrocery, updateGrocery } from '../../services/groceries';
import { Grocery, GroceryItem } from './ListStyles';

export default function ListItem(props) {

  const [groceryData, setGroceryData] = useState({
    status: props.grocery.status
  })

  useEffect(() => {
    const handleChange = async () => {
      const resp = await updateGrocery(props.grocery.id, groceryData);
    }
    handleChange()
  }, [groceryData]);


  return (
    <Grocery>
      <div style={groceryData.status === 2 ? { background: "red" } : {}}
        onClick={() => 
          setGroceryData({status: groceryData.status !== 2 ? 2 : 1})
        }
        className="radio">
      </div>
      <GroceryItem > {props.name}</GroceryItem>
    </Grocery>
  )
}