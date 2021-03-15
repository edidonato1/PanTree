import { useEffect, useState } from 'react';
import { getOneGrocery, updateGrocery } from '../../services/groceries';
import { Grocery, GroceryItem } from './ListStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import  colors  from '../../css_assets/colorVars';

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
      <div style={{ background: groceryData.status === 2 ?  colors.paleGreen : 'white'}}
        onClick={() => 
          setGroceryData({status: groceryData.status !== 2 ? 2 : 1})
        }
        className="radio">
        {groceryData.status === 2 ?
          <FontAwesomeIcon icon={faCheck} className="check" /> : null
        }
      </div>
      <GroceryItem > {props.name}</GroceryItem>
    </Grocery>
  )
}