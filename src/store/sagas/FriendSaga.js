import {takeLatest, call, put, select} from 'redux-saga/effects';
import {FriendTypes} from '../types';
import {storeData, getData} from '../../utils/localstorage';
import {setAddFriendAction, setFriendsAction} from '../actions';
import {
  friendsRequest,
  inviteFriendRequest,
} from '../../services/api/routes/friends';

function* initFriends() {
  const friends = yield getData('friends');
  const friendsResult = yield call(friendsRequest);
  yield put(setFriendsAction(friendsResult ? friendsResult : []));
}

function* store() {
  const friends = yield select(state => state.friends.friends);
  yield storeData('friends', friends);
}

function* addFriend({payload}) {
  try {
    const friend = yield call(inviteFriendRequest, payload);
    yield put(setAddFriendAction(friend));
    yield store();
  } catch (error) {
    console.log(error);
  }
}

function* watchFriendsSaga() {
  yield takeLatest(FriendTypes.ADD_FRIEND, addFriend);
  yield takeLatest(FriendTypes.INIT_FRIENDS, initFriends);
}

export {watchFriendsSaga};
