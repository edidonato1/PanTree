import api from './apiConfig';

export async const loginUser: (loginData: object) => object {
  const resp: object  = await api.post('/auth/login', {authentication: loginData})
}
// export const loginUser = async