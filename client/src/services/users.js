import api from './apiConfig';

export const getOneUser = async id => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const putUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, {user: userData});
  return resp.data;
}