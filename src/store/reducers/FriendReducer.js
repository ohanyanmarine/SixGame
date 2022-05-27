import {FriendTypes} from '../types';

const INIT_STATE = {
  friends: [],
  selected: null,
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case FriendTypes.SET_FRIENDS:
      return {...state, friends: payload};

    case FriendTypes.ADD_FRIEND:
      return {...state, friends: [...state.friends, payload]};

    default:
      return state;
  }
};
