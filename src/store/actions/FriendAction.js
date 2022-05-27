import {FriendTypes} from '../types';

export const setFriendsAction = payload => {
  return {
    type: FriendTypes.SET_FRIENDS,
    payload,
  };
};
export const getFriendsAction = payload => {
  return {
    type: FriendTypes.GET_FRIENDS,
    payload,
  };
};

export const addFriendAction = payload => {
  return {
    type: FriendTypes.ADD_FRIEND,
    payload,
  };
};
export const setAddFriendAction = payload => {
  console.log(payload);
  return {
    type: FriendTypes.SET_ADD_FRIEND,
    payload,
  };
};

export const initFriends = () => {
  return {
    type: FriendTypes.INIT_FRIENDS,
  };
};
