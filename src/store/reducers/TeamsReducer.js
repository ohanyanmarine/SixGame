import {TeamTypes} from '../types';

const INIT_STATE = {
  teams: [],
  selected: {},
  selectedMember: {},
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case TeamTypes.ADD_TEAM:
      const newTeam = {...payload, id: Date.now(), members: []};
      return {...state, teams: [...state.teams, newTeam]};

    case TeamTypes.SELECT_TEAM:
      const team = state.teams.find(item => {
        return item.id === parseInt(payload);
      });
      return {...state, selected: team ? team : {}};

    case TeamTypes.SET_REMOVE_TEAM:
      const list = state.teams.filter(item => item.id != payload);
      return {...state, teams: list};

    case TeamTypes.CHANGE_TEAM_NAME:
      const {tId, name} = payload;
      const tmpTeams = state.teams.map(item => {
        if (item.id === parseInt(tId)) {
          item.team_Name = name;
        }
        return {...item};
      });
      return {
        ...state,
        teams: tmpTeams,
        selected: {
          ...state.selected,
          team_Name: name,
        },
      };

    case TeamTypes.ADD_TEAM_MEMBER:
      const {id, user} = payload;
      const newUser = {...user, id: Date.now()};
      const tmp = [...state.teams];
      const index = tmp.findIndex(item => {
        return item.id == id;
      });
      tmp[index].members.push(newUser);
      return {
        ...state,
        teams: tmp,
      };

    case TeamTypes.SET_REMOVE_TEAM_MEMBER:
      const {memberId, teamId} = payload;
      console.log('teamId, id= ', payload);
      const temp = [...state.teams];
      temp.map(team => {
        if (team.id == teamId) {
          team.members = team.members.filter(item => item.id != memberId);
        }
        return {...team};
      });
      return {...state, teams: temp};

    case TeamTypes.SELECT_TEAM_MEMBER:
      const {selectTeamId, selectMemberId} = payload;
      const selectTeam = state.teams.find(item => {
        return item.id === parseInt(selectTeamId);
      });
      const selectMember = selectTeam.members.find(item => {
        return item.id === parseInt(selectMemberId);
      });
      return {...state, selectedMember: selectMember ? selectMember : {}};

    case TeamTypes.CHANGE_TEAM_MEMBER_NAME:
      const {changeTeamId, changeMemberId, changeName} = payload;
      const tmpMembers = [...state.teams];
      tmpMembers.map(team => {
        if (team.id === parseInt(changeTeamId)) {
          team.members.map(member => {
            if (member.id === parseInt(changeMemberId)) {
              member.name = changeName;
            }
          });
        }
      });
      return {
        ...state,
        teams: tmpMembers,
        selectedMember: {
          ...state.selectedMember,
          name: changeName,
        },
      };

    default:
      return state;
  }
};
