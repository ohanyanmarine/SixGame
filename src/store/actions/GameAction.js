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

export const setStartAction = payload => {
  return {
    type: GameTypes.START_GAME,
    payload,
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

export const chooseMembersAction = () => {
  return {
    type: GameTypes.CHOOSE_MEMBERS,
  };
};
export const resetGameAction = () => {
  return {
    type: GameTypes.RESET_GAME,
  };
};

export const selectWordAction = payload => {
  return {
    type: GameTypes.SELECT_WORD,
    payload,
  };
};
export const setCheckAnswersAction = payload => {
  return {
    type: GameTypes.CHECK_ANSWERS,
    payload,
  };
};

export const getWordsAction = () => {
  return {
    type: GameTypes.GET_WORDS,
  };
};

export const setWordsAction = payload => {
  return {
    type: GameTypes.SET_WORDS,
    payload,
  };
};

export const getCategoriesAction = () => {
  return {
    type: GameTypes.GET_CATEGORIES,
  };
};

export const setCategoriesAction = payload => {
  return {
    type: GameTypes.SET_CATEGORIES,
    payload,
  };
};

export const setGameAction = (words, difficulty) => {
  return {
    type: GameTypes.SET_GAME,
    payload: {
      words: words,
      // index: 0,
      // stage: 0,
      difficulty: difficulty,
    },
  };
};

export const setDifficultyAction = payload => {
  return {
    type: GameTypes.SET_DIFFICULTY,
    payload,
  };
};
export const setGoalAction = payload => {
  return {
    type: GameTypes.SET_GOAL,
    payload,
  };
};

export const setNewWordsAction = words => {
  return {
    type: GameTypes.SET_NEW_WORDS,
    payload: words,
  };
};
export const getNewWordsAction = payload => {
  return {
    type: GameTypes.GET_NEW_WORDS,
    payload,
  };
};
export const setNewTurnAction = payload => {
  return {
    type: GameTypes.SET_NEW_TURN,
    payload,
  };
};

export const gameOverAction = () => {
  return {
    type: GameTypes.GAME_OVER,
  };
};

export const setPointsAction = () => {
  return {
    type: GameTypes.SET_POINTS,
  };
};
