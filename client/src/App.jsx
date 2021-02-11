import { useEffect, useState } from 'react';
import {getAllCategories} from './services/categories';

function App() {


  useEffect(() => {
    const fetchCategries = async () => {
      const categoryData = await getAllCategories();
      console.log(categoryData)
    }
    fetchCategries();
  }, [])
  


  return (
    <div className="App">

    </div>
  );
}

export default App;
