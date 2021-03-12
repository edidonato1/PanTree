import { getOneGrocery } from '../../services/groceries';
import { Grocery } from './ListStyles';

export default function ListItem(props) {

  return (
    <Grocery>
      <li key={props.key}> {props.name}</li>
    </Grocery>
  )
}