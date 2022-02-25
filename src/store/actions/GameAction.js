import {GameTypes} from '../types';

export const setTeam1Action = payload => {
  return {
    type: GameTypes.SET_TEAM1,
    payload,
  };
};
export const setTeam2Action = payload => {
  return {
    type: GameTypes.SET_TEAM2,
    payload,
  };
};
export const setTurnAction = payload => {
  return {
    type: GameTypes.SET_TURNS,
    payload,
  };
};
