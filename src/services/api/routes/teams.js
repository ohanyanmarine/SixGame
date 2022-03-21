import api from '..';

export const teamsRequest = async () => {
  try {
    const response = await api.get('team/all');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
