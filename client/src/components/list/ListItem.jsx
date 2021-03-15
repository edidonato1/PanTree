import { useEffect, useState } from 'react';
import { deleteGrocery, updateGrocery } from '../../services/groceries';
import { Grocery, GroceryItem } from './ListStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import colors from '../../css_assets/colorVars';

export default function ListItem(props) {
  const [showOptions, setShowOptions] = useState(false);
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
    <>
      <Grocery showOptions={showOptions}>
        <div style={{ background: groceryData.status === 2 ? colors.paleGreen : 'white' }}
          onClick={() => setGroceryData({ status: groceryData.status !== 2 ? 2 : 1 })}
          className="radio">
          {
            groceryData.status === 2 ?
              <FontAwesomeIcon icon={faCheck} className="check" />
              : null
          }
        </div>
        <GroceryItem > {props.name}</GroceryItem>
        <div className="update-list-item" onClick={() => setShowOptions(!showOptions)}>
          <FontAwesomeIcon icon={faChevronDown} className="drop-down" />
        </div>
      </Grocery>
      {
        showOptions ?
          <div>
            <p>options</p>
          </div>
          : <></>
      }
    </>
  )
}