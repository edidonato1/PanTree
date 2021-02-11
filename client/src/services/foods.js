import api from './apiConfig';

export const getAllFoods = async () => {
  const resp = await api.get('/foods')
}

