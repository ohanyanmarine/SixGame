import {takeLatest, call, put, select} from 'redux-saga/effects';
import {setWordsAction} from '../actions';
import {WordTypes} from '../types';

function* getWords() {
  try {
    const words = yield call(wordsRequest);
    yield put(setWordsAction(words.results));
  } catch (error) {
    console.log(error);
  }
}

function* watchWordsSaga() {
  yield takeLatest(WordTypes.GET_WORDS, getWords);
}
export {watchWordsSaga};
