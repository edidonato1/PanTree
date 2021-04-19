import { useEffect, useState } from 'react';
import { getAllFoods } from '../../services/foods';
import Selector from './Selector'
import Categories from '../../components/library/Categories';
import {
  Block,
  LibraryMain
} from './LibraryStyles';

export default function Library({ categories }) {
  const [foods, setFoods] = useState([])
  const [selection, setSelection] = useState('all')

  useEffect(() => {
    const fetchFoods = async () => {
      const resp = await getAllFoods();
      setFoods(resp);
    }
    fetchFoods();
  }, []);

  return (
    <LibraryMain>
      <Selector selection={selection} setSelection={setSelection}/>
      <Categories foods={foods} categories={categories}/>
    </LibraryMain>
  )
}