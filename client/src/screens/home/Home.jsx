import Layout from '../../components/shared/layout/Layout';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../services/categories';

const Home = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <Layout>
      <List categories={categories} />
    </Layout>
  )
}

export default Home;