import api from '..';

export const friendsRequest = async () => {
  try {
    const response = await api.get('/api/user/relation');
    return response.data.result;
  } catch (error) {
    if (error) {
      console.log(error, 'error');
      throw error;
    }
    throw error;
  }
};

export const inviteFriendRequest = async payload => {
  try {
    const response = await api.post('/api/user/createOrInviteByEmail', payload);
    return response.data.result;
  } catch (error) {
    if (error) {
      console.log(error, 'error');
      throw error;
    }
    throw error;
  }
};
