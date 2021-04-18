import { useEffect, useState } from 'react';
import CategoryLink from './CategoryLink';
import Category from './Category';
import { getAllCategories } from '../../services/categories';
import {
  Block,
  CategoryLib
} from './Library Styles';

export default function Categories({categories, foods}) {

  const [currentCategory, setCurrentCategory] = useState(null)
  const [currentFoods, setCurrentFoods] = useState(foods)

  useEffect(() => {
    const filterFoods = () => {
        setCurrentFoods(foods.filter(f =>
          f.category_id === currentCategory?.id
        ).sort((a, b) => {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return ((textA < textB) ? -1 : (textA > textB) ? 1 : 0);
        })
      )
    }
    filterFoods();
  }, [currentCategory]);

  return (
    <CategoryLib>
      { currentCategory && <button onClick={() => setCurrentCategory(null)}>back </button> }
      <div></div>
      { currentCategory
        ? <Category category={ currentCategory }/>
        : categories?.map((c, i) => 
            <CategoryLink
              key={c.id}
              category={c}
              name={c.name}
              image={c.img_url}
              orientation={i % 2 === 0 ? "right" : "left"}
              setCurrentCategory={setCurrentCategory}
            />
          )
      }
      
    </CategoryLib>
  )
}