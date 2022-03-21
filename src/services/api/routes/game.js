import api from '..';

export const wordsRequest = async () => {
  try {
    console.log('make reqquest');
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
