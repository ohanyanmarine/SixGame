import {WordTypes} from '../types';

export const getWordsAction = () => {
  return {
    type: WordTypes.GET_WORDS,
  };
};

export const setWordsAction = payload => {
  return {
    type: WordTypes.SET_WORDS,
    payload,
  };
};

export const selectWordAction = id => {
  return {
    type: WordTypes.SELECT_WORD,
    payload: id,
  };
};
