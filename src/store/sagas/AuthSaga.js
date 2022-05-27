import {takeLatest, call, put} from 'redux-saga/effects';
import {loginRequest, registerRequest} from '../../services/api/routes/auth';
import {storeData, getData} from '../../utils/localstorage';
import {authSuccessAction, setErrorMessage} from '../actions';
import {AuthTypes} from '../types';

function* register({payload}) {
  try {
    const data = yield call(registerRequest, payload);
    if (data.access) {
      yield storeData('access', data.access);
      const access = getData('access');
      yield put(authSuccessAction());
    }
  } catch (error) {
    console.log(error, 'error sagaaaaaaaaaaaaa');
  }
}

function* login({payload}) {
  try {
    const data = yield call(loginRequest, payload);
    console.log(data, 'login data in saga');
    if (data.access) {
      yield storeData('access', data.access);
      api.defaults.headers.common['Authorization'] = 'Bearer ' + data.access;
      yield put(authSuccessAction());
    }
  } catch (error) {
    console.log(error, 'errorrrrrrrrrrrrrrrr');
    //yield put(setErrorMessage(error.message));
  }
}

function* watchAuthSaga() {
  yield takeLatest(AuthTypes.REGISTER, register);
  yield takeLatest(AuthTypes.LOGIN, login);
}

export {watchAuthSaga};
