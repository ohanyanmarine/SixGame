import api from '..';

export const teamsRequest = async () => {
  try {
    const response = await api.get('/api/team/all');
    return response.data.result;
  } catch (error) {
    if (error) {
      console.log(error, 'error');
      throw error;
    }
    throw error;
  }
};

export const addTeamRequest = async payload => {
  try {
    const response = await api.post(`/api/team/`, payload);
    return response.data.result;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const updateTeamRequest = async payload => {
  try {
    const response = await api.put(`/api/team/${payload.tId}/`, {
      name: payload.name,
    });
    return response.data.result;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const deleteTeamRequest = async id => {
  try {
    const response = await api.delete(`/api/team/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error);
      throw error.response.data;
    }
    throw error;
  }
};

export const oneTeamRequest = async payload => {
  try {
    const response = await api.get(`/api/team/${payload}`);
    return response.data.result;
  } catch (error) {
    if (error) {
      console.log(error, 'error');
      throw error;
    }
    throw error;
  }
};

export const addMemberRequest = async payload => {
  try {
    const response = await api.post(`/api/team/${payload.teamId}/add-member`, {
      userId: payload.user.id,
    });
    return response.data.result;
  } catch (error) {
    if (error) {
      console.log(error, 'error in add member request');
      throw error;
    }
    throw error;
  }
};

export const deleteMemberRequest = async payload => {
  try {
    const response = await api.delete(
      `/api/team/${payload.teamId}/member/${payload.memberId}`,
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
