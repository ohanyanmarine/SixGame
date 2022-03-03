import {TeamTypes} from '../types';

const INIT_STATE = {
  teams: [],
  selected: null,
  filteredTeams: [],
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case TeamTypes.SET_TEAMS:
      return {...state, teams: payload};

    case TeamTypes.ADD_TEAM:
      const newTeam = {...payload};
      return {...state, teams: [...state.teams, newTeam]};

    case TeamTypes.SELECT_TEAM:
      return {...state, selected: payload};

    case TeamTypes.SET_REMOVE_TEAM:
      const list = state.teams.filter(item => item.id !== parseInt(payload));
      return {...state, teams: list};

    case TeamTypes.CHANGE_TEAM_NAME:
      const {tId, name} = payload;
      const tmpTeams = state.teams.map(item => {
        if (item.id === parseInt(tId)) {
          item.team_Name = name;
        }
        return {...item};
      });
      return {...state, teams: tmpTeams};

    case TeamTypes.ADD_TEAM_MEMBER:
      const tmp = [...state.teams];
      const index = tmp.findIndex(item => {
        return item.id === parseInt(payload.teamId);
      });
      tmp[index].members.push(payload.user);
      return {...state, teams: tmp};

    case TeamTypes.SET_REMOVE_TEAM_MEMBER:
      const {memberId, teamId} = payload;
      const temp = [...state.teams];
      temp.map(team => {
        if (team.id == teamId) {
          team.members = team.members.filter(
            item => item.id !== parseInt(memberId),
          );
        }
        return {...team};
      });
      return {...state, teams: temp};

    case TeamTypes.SELECT_TEAM_MEMBER:
      const {selectTeamId, selectMemberId} = payload;
      return {
        ...state,
        selected: {teamId: selectTeamId, memberId: selectMemberId},
      };

    case TeamTypes.CHANGE_TEAM_MEMBER_NAME:
      const tmpMembers = [...state.teams];
      tmpMembers.map(team => {
        if (team.id == payload.teamId) {
          team.members.map(member => {
            if (member.id == payload.memberId) {
              member.name = payload.name;
            }
          });
        }
      });
      return {...state, teams: tmpMembers};

    case TeamTypes.SET_CHECK:
      const checked = state.teams.map(team => {
        if (team.id === parseInt(payload)) {
          team.check = !team.check;
        }
        return {...team};
      });
      return {...state, teams: checked};

    case TeamTypes.SET_CHECK_MEMBER:
      const checkedMember = [...state.teams];
      checkedMember.map(team => {
        if (team.id === parseInt(payload.idTeam)) {
          team.members.map(member => {
            if (member.id == parseInt(payload.idMember)) {
              member.check = !member.check;
            }
          });
        }
      });
      return {...state, teams: checkedMember};

    case TeamTypes.CHOOSE_TEAMS:
      const filtered = state.teams.filter(team => {
        return team.check;
      });
      return {...state, filteredTeams: filtered};

    case TeamTypes.CHOOSE_MEMBERS:
      const gameTeams = [...state.teams];
      gameTeams.map(team => {
        team.members = team.members.filter(item => {
          return item.check;
        });
      });
      return {...state, teams: gameTeams};
    default:
      return state;
  }
};
