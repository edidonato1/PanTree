import api from './apiConfig';

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const getOneCategory = async id => {
  const resp = await api.get(`/categories/${id}`);
  return resp.data;
}

export const addCategory = async categoryData => {
  const resp = await api.post('/categories', { category: categoryData });
  return resp.data;
}