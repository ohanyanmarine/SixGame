import {all} from 'redux-saga/effects';
import {watchTeamsSaga} from './TeamsSaga';

function* rootSaga() {
  yield all([watchTeamsSaga()]);
}

export default rootSaga;
