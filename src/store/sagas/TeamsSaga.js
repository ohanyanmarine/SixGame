import {takeLatest, call, put, select} from 'redux-saga/effects';
import {TeamTypes} from '../types';
import {
  setAddTeamAction,
  setAddTeamMemberAction,
  setRemoveTeamAction,
  setRemoveTeamMemberAction,
  setTeamsAction,
  addTeamMemberAction,
} from '../actions';
import {setTeamMembersAction} from '../actions/TeamAction';
import {storeData, getData} from '../../utils/localstorage';

function* addTeam({payload}) {
  try {
    // const team = yield call(addTeamRequest, payload);
    const team = yield put(setAddTeamAction(payload));
    console.log('saga -- team=====--------', team);
    yield storeData('team', team);
  } catch (error) {
    console.log(error);
  }
}

function* getRemoveTeam({payload}) {
  console.log('removed team: ', payload);
  yield put(setRemoveTeamAction(payload));
}

function* addTeamMember({payload}) {
  try {
    // const team = yield call(addTeamRequest, payload);
    const member = yield put(setAddTeamMemberAction(payload));
    console.log('member=====', member);
  } catch (error) {
    console.log(error);
  }
}
function* getRemoveTeamMember(payload) {
  //const {memberId, teamId} = payload;
  //console.log('removed member saga: ', {memberId, teamId});
  yield put(setRemoveTeamMemberAction(payload));
}

function* watchTeamsSaga() {
  yield takeLatest(TeamTypes.ADD_TEAM, addTeam);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM, getRemoveTeam);
  //yield takeLatest(TeamTypes.ADD_TEAM_MEMBER, addTeamMember);
  //yield takeLatest(TeamTypes.GET_TEAM_MEMBERS, getTeamMembars);
  yield takeLatest(TeamTypes.ADD_TEAM_MEMBER, addTeamMember);
  yield takeLatest(TeamTypes.GET_REMOVE_TEAM_MEMBER, getRemoveTeamMember);
}
export {watchTeamsSaga};
