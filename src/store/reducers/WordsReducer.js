import {WordTypes} from '../types';

const INIT_STATE = {
  words: [],
  collection: [],
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case WordTypes.SET_WORDS:
      return {...state, words: payload};
    case WordTypes.SELECT_WORD_COLLECTION:
      const wordCollection = state.words.filter(item => {
        return item.difficult === payload;
      });
      return {...state, collection: wordCollection};
    default:
      return state;
  }
};
