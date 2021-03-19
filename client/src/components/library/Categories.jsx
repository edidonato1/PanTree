import { useEffect, useState } from 'react';
import CategoryLink from './CategoryLink';
import { getAllCategories } from '../../services/categories';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const resp = await getAllCategories();
      setCategories(resp);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {
        categories?.map((c, i) => 
          <CategoryLink
            name={c.name}
            image={c.img_url}
            orientation={i % 2 === 0 ? "right" : "left"} />
          )
      }
      
      </>
  )
}