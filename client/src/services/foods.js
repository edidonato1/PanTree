import api from './apiConfig';

export const getAllFoods = async () => { // 
  const resp = await api.get('/foods')
  return resp.data;
}

export const getOneFood = async id => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
}

export const updateFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData })
  return resp.data;
}

export const deleteFood = async id => {
  await api.delete(`/foods/${id}`)
}
