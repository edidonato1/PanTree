import api from './apiConfig';

export const createList = async () => {
  const resp = await api.post('/lists');
  return resp.data;
}

export const updateList = async (id, listData) => {
  const resp = await api.put(`/lists/${id}`, { list: listData })
  return resp.data;
}

export const addGroceryToList = async id => {
  const resp = await api.put(`/lists/${id}/groceries/`);
  return resp.data;
}

export const moveGroceryToList = async (listId, groceryId) => {
  const resp = await api.put(`/list/${listId}/groceries/${groceryId}`);
  return resp.data;
}

export const deleteList = async id => {
  await api.delete(`/lists/${id}`);
}
