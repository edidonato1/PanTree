import { useEffect, useState } from 'react';
import { getAllFoods } from '../../services/foods';
import Categories from '../../components/library/Categories';
import {
  Block,
  LibraryMain
} from './LibraryStyles';

export default function Library({ categories }) {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      const resp = await getAllFoods();
      setFoods(resp);
    }
    fetchFoods();
  }, []);

  return (
    <LibraryMain>
      <Categories foods={foods} categories={categories}/>
    </LibraryMain>
  )
}