import { useEffect, useState } from 'react';
import CategoryLink from './CategoryLink';
import Category from './Category';
import { CategoryLib } from './LibraryStyles';


export default function Categories({
  categories,
  currentCategory,
  currentFoods,
  setCurrentFoods,
  foods,
  setCurrentCategory
}) {

  const category = categories.filter(c => c.name === currentCategory)[0];

  useEffect(() => {
    setCurrentFoods(
      foods.filter(food => food.category_id === category?.id)
        .sort((a, b) => {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    );
  }, [currentCategory]);

  return (
    <CategoryLib>
      { currentCategory
        ? <Category
            currentFoods={currentFoods}
            category={category}
          />
        : categories?.map((c, i) => 
            <CategoryLink
              key={c.id}
              category={c}
              name={c.name}
              image={c.img_url}
              orientation={i % 2 === 0 ? "left" : "right"}
              setCurrentCategory={setCurrentCategory}
            />
          )
      }
      
    </CategoryLib>
  )
}
