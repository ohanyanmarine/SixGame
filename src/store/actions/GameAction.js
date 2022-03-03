import {GameTypes} from '../types';

export const setGameTeamsAction = payload => {
  return {
    type: GameTypes.SET_GAME_TEAMS,
    payload,
  };
};

export const setTurnsAction = () => {
  return {
    type: GameTypes.SET_TURNS,
  };
};

export const setTurnAction = () => {
  return {
    type: GameTypes.SET_TURN,
  };
};

export const setStartAction = () => {
  return {
    type: GameTypes.START_GAME,
  };
};
export const setChangeStageAction = () => {
  return {
    type: GameTypes.CHANGE_STAGE,
  };
};
export const setNextTurnAction = () => {
  return {
    type: GameTypes.NEXT_TURN,
  };
};
