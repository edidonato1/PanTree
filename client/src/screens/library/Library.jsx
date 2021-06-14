import { useEffect, useState } from 'react';
import { getAllFoods } from '../../services/foods';
import Selector from './Selector'
import Categories from '../../components/library/Categories';
import {
  LibraryMain
} from './LibraryStyles';
import {
  Block
} from '../../components/library/LibraryStyles';

export default function Library({ categories }) {
  const [foods, setFoods] = useState([])
  const [selection, setSelection] = useState('categories')
  const [currentCategory, setCurrentCategory] = useState(null)
  const [currentFoods, setCurrentFoods] = useState(foods)

  useEffect(() => {
    const fetchFoods = async () => {
      const resp = await getAllFoods();
      setFoods(resp);
    }
    fetchFoods();
  }, []);
  


  return (
    <LibraryMain>
      <Block
        left
        width="80%"
        marginLeft="-20px"
        alignSelf="flex-start"
        fontSize="23px"
      >
        library
      </Block>
      <Selector
        selection={selection}
        setSelection={setSelection}
        setCurrentCategory={setCurrentCategory}
      />
      {selection === 'categories'
        ?
        <Categories
          foods={foods}
          categories={categories}
          currentFoods={currentFoods}
          setCurrentFoods={setCurrentFoods}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        :
        <></>
    }
    </LibraryMain>
  )
}