import api from '..';

export const registerRequest = async data => {
  try {
    const response = await api.post('/api/auth/register', data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

export const loginRequest = async data => {
  try {
    const response = await api.post('/api/auth/login', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
