import { WordTypes } from "../types";

const INIT_STATE = {
  words: null,
  selected: {},
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case WordTypes.SET_WORDS:
      return { ...state, words: payload };
    case WordTypes.SELECT_WORD:
        const word = state.words.find((item)=>{
           return item.id === parseInt(payload);
        })
        return {...state, selected: word ? word : {}}
    default:
        return state;
  }
  
};
