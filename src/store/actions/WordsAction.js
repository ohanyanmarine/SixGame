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

export const selectWordCollectionAction = payload => {
  return {
    type: WordTypes.SELECT_WORD_COLLECTION,
    payload,
  };
};
