import {takeLatest, call, put, select} from 'redux-saga/effects';
import {TeamTypes} from '../types';
import {
  setAddTeamAction,
  setAddTeamMemberAction,
  setRemoveTeamAction,
  setRemoveTeamMemberAction,
  setTeamsAction,
  changeTeamNameAction,
  changeTeamMemberNameAction,
} from '../actions';
import {storeData, getData} from '../../utils/localstorage';

function* initTeams() {
  const teams = yield getData('teams');
  yield put(setTeamsAction(teams ? teams : []));
}

function* store() {
  const teams = yield select(state => state.teams.teams);
  yield storeData('teams', teams);
}

function* addTeam({payload}) {
  try {
    yield put(setAddTeamAction(payload));
    yield store();
  } catch (error) {
    console.log(error);
  }
}

function* getRemoveTeam({payload}) {
  yield put(setRemoveTeamAction(payload));
  yield store();
}

function* addTeamMember({payload}) {
  try {
    yield put(setAddTeamMemberAction(payload));
    yield store();
  } catch (error) {
    console.log(error);
  }
}
function* getRemoveTeamMember({payload}) {
  yield put(setRemoveTeamMemberAction(payload));
  yield store();
}

function* updateTeam(payload) {
  yield put(changeTeamNameAction(payload.payload));
  yield store();
}

function* updateTeamMember(payload) {
  yield put(changeTeamMemberNameAction(payload.payload));
  yield store();
}

function* watchTeamsSaga() {
  yield takeLatest(TeamTypes.ADD_TEAM, addTeam);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM, getRemoveTeam);
  yield takeLatest(TeamTypes.ADD_TEAM_MEMBER, addTeamMember);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM_MEMBER, getRemoveTeamMember);
  yield takeLatest(TeamTypes.INIT_TEAMS, initTeams);
  yield takeLatest(TeamTypes.UPDATE_TEAM_NAME, updateTeam);
  yield takeLatest(TeamTypes.UPDATE_TEAM_MEMBER_NAME, updateTeamMember);
}

export {watchTeamsSaga};
