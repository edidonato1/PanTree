import { useEffect, useState } from 'react';
import {getOneFood} from './services/foods';

function App() {


  useEffect(() => {
    const fetchFoods = async () => {
    try {
      const foodData = await getOneFood('1');
      console.log(foodData)
      } catch (error) {
          console.log(error)
      }
    }
    fetchFoods();
  }, [])
  


  return (
    <div className="App">

    </div>
  );
}

export default App;
