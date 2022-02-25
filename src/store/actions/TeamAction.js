import {TeamTypes} from '../types';

export const addTeamAction = data => {
  return {
    type: TeamTypes.ADD_TEAM,
    payload: data,
  };
};
export const setAddTeamAction = payload => {
  return {
    type: TeamTypes.SET_ADD_TEAM,
    payload,
  };
};
export const selectTeamAction = payload => {
  return {
    type: TeamTypes.SELECT_TEAM,
    payload,
  };
};
export const getRemoveTeamAction = payload => {
  return {
    type: TeamTypes.GET_REMOVE_TEAM,
    payload,
  };
};
export const setRemoveTeamAction = payload => {
  return {
    type: TeamTypes.SET_REMOVE_TEAM,
    payload,
  };
};
export const addTeamMemberAction = (id, user) => {
  return {
    type: TeamTypes.ADD_TEAM_MEMBER,
    payload: {id: id, user: user},
  };
};
export const setAddTeamMemberAction = (id, user) => {
  return {
    type: TeamTypes.SET_ADD_TEAM_MEMBER,
    payload: {id: id, user: user},
  };
};
export const getRemoveTeamMemberAction = (memberId, teamId) => {
  console.log('payload in actin getRemoveTeamMemberAction', memberId, teamId);
  return {
    type: TeamTypes.GET_REMOVE_TEAM_MEMBER,
    payload: {memberId: memberId, teamId: teamId},
  };
};
export const setRemoveTeamMemberAction = (memberId, teamId) => {
  console.log('payload in actin setRemoveTeamMemberAction', memberId, teamId);
  return {
    type: TeamTypes.SET_REMOVE_TEAM_MEMBER,
    payload: {memberId: memberId, teamId: teamId},
  };
};

export const changeTeamNameAction = (id, name) => {
  console.log('id, name in action ', id, name);
  return {
    type: TeamTypes.CHANGE_TEAM_NAME,
    payload: {tId: id, name: name},
  };
};

export const selectTeamMemberAction = (teamId, memberId) => {
  return {
    type: TeamTypes.SELECT_TEAM_MEMBER,
    payload: {selectTeamId: teamId, selectMemberId: memberId},
  };
};

export const changeTeamMemberNameAction = (
  changeTeamId,
  changeMemberId,
  name,
) => {
  return {
    type: TeamTypes.CHANGE_TEAM_MEMBER_NAME,
    payload: {
      changeTeamId: changeTeamId,
      changeMemberId: changeMemberId,
      changeName: name,
    },
  };
};
