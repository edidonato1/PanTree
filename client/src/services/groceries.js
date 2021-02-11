import api from './apiConfig';

export const getAllGroceries = async () => {
  const resp = await api.get('/groceries');
  return resp.data;
}

export const getOneGrocery = async id => {
  const resp = await api.get(`/groceries/${id}`);
  return resp.data;
}

export const updateGrocery = async (id, groceryData) => {
  const resp = await api.put(`/groceries/${id}`, {grocery: groceryData});
  return resp.data;
}

export const deleteGrocery = async id => {
  await api.delete(`/groceries/${id}`)
}