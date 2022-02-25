import {GameTypes} from '../types';

const INIT_STATE = {
  team1: null,
  team2: null,
  turns: null,
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case GameTypes.SET_TEAM1:
      return {...state, team1: payload};
    case GameTypes.SET_TEAM2:
      return {...state, team2: payload};
    case GameTypes.SET_TURNS:
      const players = state.team1.reduce((acc, el, i) => {
        acc.push(el, state.team2[i]);
        return acc;
      }, []);
      return {...state, turns: players};
    default:
      return state;
  }
};
