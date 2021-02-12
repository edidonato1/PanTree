import api from './apiConfig';

export const getOnePantry = async id => {
  const resp = await api.get(`/pantries/${id}`);
  return resp.data;
}

export const updatePantry = async id => {
  const resp = await api.put(`/pantries/${id}`);
  return resp.data;
}

export const addGroceryToPantry = async (pantryId, groceryId) => {
  const resp = await api.put(`/pantries/${pantryId}/groceries/${groceryId}`);
  return resp.data;
}

// do we need this? maybe just delete grocery
export const removeGroceryFromPantry = async (pantryId, groceryId) => {
  const resp = await api.delete(`/pantries/${pantryId}/groceries/${groceryId}`);
  return resp.data;
}