import {takeLatest, call, put, select} from 'redux-saga/effects';
import {TeamTypes} from '../types';
import {storeData, getData} from '../../utils/localstorage';
import {
  setAddTeamAction,
  setAddTeamMemberAction,
  setRemoveTeamAction,
  setRemoveTeamMemberAction,
  setTeamsAction,
  changeTeamNameAction,
  selectTeamAction,
  setOneTeamAction,
} from '../actions';
import {
  addMemberRequest,
  addTeamRequest,
  deleteMemberRequest,
  deleteTeamRequest,
  oneTeamRequest,
  teamsRequest,
  updateTeamRequest,
} from '../../services/api/routes/teams';

function* initTeams() {
  const teams = yield getData('teams');
  const request = yield call(teamsRequest);
  yield put(setTeamsAction(request ? request : teams));
}

function* store() {
  const teams = yield select(state => state.teams.teams);
  yield storeData('teams', teams);
}

function* addTeam({payload}) {
  const team = payload;
  try {
    const newTeam = yield call(addTeamRequest, {name: team.name});
    yield put(setAddTeamAction(newTeam));
    yield store();
  } catch (error) {
    console.log(error);
  }
}

function* getRemoveTeam({payload}) {
  const deletedTeam = yield call(deleteTeamRequest, payload);
  yield put(setRemoveTeamAction(payload));
  yield store();
}

function* updateTeam({payload}) {
  const updatedTeam = yield call(updateTeamRequest, payload);
  yield put(changeTeamNameAction(updatedTeam));
  yield store();
}

function* getOneTeam({payload}) {
  try {
    const team = yield call(oneTeamRequest, payload);
    yield put(selectTeamAction(payload));
    yield put(setOneTeamAction(team ? team : {}));
    yield store();
  } catch (error) {
    console.log(error);
  }
}

function* addTeamMember({payload}) {
  try {
    const newMember = yield call(addMemberRequest, payload);
    yield put(setAddTeamMemberAction(newMember));
    yield store();
  } catch (error) {
    console.log(error);
  }
}
function* getRemoveTeamMember({payload}) {
  try {
    const removed = yield call(deleteMemberRequest, payload);
    yield put(setRemoveTeamMemberAction(payload));
    yield store();
  } catch (error) {
    console.log(error);
  }
}

function* watchTeamsSaga() {
  yield takeLatest(TeamTypes.ADD_TEAM, addTeam);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM, getRemoveTeam);
  yield takeLatest(TeamTypes.ADD_TEAM_MEMBER, addTeamMember);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM_MEMBER, getRemoveTeamMember);
  yield takeLatest(TeamTypes.INIT_TEAMS, initTeams);
  yield takeLatest(TeamTypes.UPDATE_NAME, updateTeam);
  yield takeLatest(TeamTypes.GET_ONE_TEAM, getOneTeam);
}

export {watchTeamsSaga};
