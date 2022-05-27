import api from '..';

export const wordsRequest = async () => {
  try {
    const response = await api.get('/api/word/langWord/1');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const categoriesRequest = async () => {
  try {
    const response = await api.get('/api/category/all');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const createGameRequest = async payload => {
  try {
    const response = await api.post('/api/game/', payload);
    return response.data;
  } catch (error) {
    if (error) {
      console.log(error);
      throw error;
    }
    throw error;
  }
};
