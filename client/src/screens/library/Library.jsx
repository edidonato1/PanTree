import { Block } from './LibraryStyles';
import { useEffect, useState } from 'react';
import { getAllFoods } from '../../services/foods';
import Categories from '../../components/library/Categories';

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
    <div>
      <Categories foods={foods} categories={categories}/>
    </div>
  )
}