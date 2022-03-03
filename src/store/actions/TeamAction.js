import {TeamTypes} from '../types';

export const setTeamsAction = payload => {
  return {
    type: TeamTypes.SET_TEAMS,
    payload,
  };
};
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
    payload: {teamId: id, user: user},
  };
};
export const setAddTeamMemberAction = (id, user) => {
  return {
    type: TeamTypes.SET_ADD_TEAM_MEMBER,
    payload: {teamId: id, user: user},
  };
};
export const getRemoveTeamMemberAction = (memberId, teamId) => {
  return {
    type: TeamTypes.GET_REMOVE_TEAM_MEMBER,
    payload: {memberId: memberId, teamId: teamId},
  };
};
export const setRemoveTeamMemberAction = payload => {
  return {
    type: TeamTypes.SET_REMOVE_TEAM_MEMBER,
    payload,
  };
};
export const updateTeamNameAction = (id, name) => {
  return {
    type: TeamTypes.UPDATE_TEAM_NAME,
    payload: {tId: id, name: name},
  };
};
export const changeTeamNameAction = payload => {
  return {
    type: TeamTypes.CHANGE_TEAM_NAME,
    payload,
  };
};
export const selectTeamMemberAction = (teamId, memberId) => {
  return {
    type: TeamTypes.SELECT_TEAM_MEMBER,
    payload: {selectTeamId: teamId, selectMemberId: memberId},
  };
};
export const updateTeamMemberNameAction = (
  changeTeamId,
  changeMemberId,
  changeName,
) => {
  return {
    type: TeamTypes.UPDATE_TEAM_MEMBER_NAME,
    payload: {
      teamId: changeTeamId,
      memberId: changeMemberId,
      name: changeName,
    },
  };
};
export const changeTeamMemberNameAction = payload => {
  return {
    type: TeamTypes.CHANGE_TEAM_MEMBER_NAME,
    payload,
  };
};
export const initTeams = () => {
  return {
    type: TeamTypes.INIT_TEAMS,
  };
};
export const setCheckAction = payload => {
  return {
    type: TeamTypes.SET_CHECK,
    payload,
  };
};
export const getCheckAction = payload => {
  return {
    type: TeamTypes.GET_CHECK,
    payload,
  };
};
export const getCheckMemberAction = (idTeam, idMember) => {
  return {
    type: TeamTypes.GET_CHECK_MEMBER,
    payload: {idTeam: idTeam, idMember: idMember},
  };
};
export const setCheckMemberAction = payload => {
  return {
    type: TeamTypes.SET_CHECK_MEMBER,
    payload,
  };
};
export const chooseTeamsAction = () => {
  return {
    type: TeamTypes.CHOOSE_TEAMS,
  };
};
export const chooseMembersAction = () => {
  return {
    type: TeamTypes.CHOOSE_MEMBERS,
  };
};
