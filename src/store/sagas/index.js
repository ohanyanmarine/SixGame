import {all} from 'redux-saga/effects';
import {watchWordsSaga} from './GameSaga';
import {watchTeamsSaga} from './TeamsSaga';

function* rootSaga() {
  yield all([watchTeamsSaga(), watchWordsSaga()]);
}

export default rootSaga;
