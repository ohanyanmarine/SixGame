import {GameTypes} from '../types';

const INIT_STATE = {
  teams: [],
  turns: [],
  turn: {
    team_Name: '',
    member_Name: '',
  },
  stage: 0,
  index: 0,
  points: 0,
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case GameTypes.SET_GAME_TEAMS:
      return {...state, teams: payload};

    case GameTypes.SET_TURNS:
      const players = state.teams[0].members.reduce((acc, el, i) => {
        acc.push(el, state.teams[1].members[i]);
        return acc;
      }, []);
      return {...state, turns: players};

    case GameTypes.SET_TURN:
      let teamTurn = '';
      if (state.index % 2 == 0) {
        teamTurn = state.teams[0].team_Name;
      } else {
        teamTurn = state.teams[1].team_Name;
      }
      const memberTurn = state.turns.find((item, i) => {
        if (i === state.index) return item;
      });
      return {
        ...state,
        turn: {
          ...state.turn,
          team_Name: teamTurn,
          member_Name: memberTurn.name,
        },
        stage: 0,
      };

    case GameTypes.START_GAME:
      return {...state, stage: 1};

    case GameTypes.CHANGE_STAGE:
      console.log(state.stage);
      return {...state, stage: 2};

    case GameTypes.NEXT_TURN:
      let i = state.index;
      i++;
      return {...state, stage: 0, index: i};

    default:
      return state;
  }
};
