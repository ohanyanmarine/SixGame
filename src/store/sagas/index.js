import {all} from 'redux-saga/effects';
import {watchWordsSaga} from './GameSaga';
import {watchAuthSaga} from './AuthSaga';
import {watchTeamsSaga} from './TeamsSaga';
import {watchFriendsSaga} from './FriendSaga';

function* rootSaga() {
  yield all([
    watchTeamsSaga(),
    watchWordsSaga(),
    watchAuthSaga(),
    watchFriendsSaga(),
  ]);
}

export default rootSaga;
