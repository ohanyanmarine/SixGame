import api from '..';

export const settingsRequest = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
