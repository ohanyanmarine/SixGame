import {takeLatest, call, put, select} from 'redux-saga/effects';
import {GameTypes} from '../types';
import {storeData, getData} from '../../utils/localstorage';
import {wordsRequest, categoriesRequest} from '../../services/api/routes/game';
import {
  setCategoriesAction,
  setGameAction,
  setNewTurnAction,
  setNewWordsAction,
  setWordsAction,
} from '../actions';

function* getWords() {
  try {
    const words = yield call(wordsRequest);
    yield storeData('words', words.result);
    yield put(setWordsAction(words.result));
  } catch (error) {
    console.log(error);
  }
}

function* getCategories() {
  try {
    const categories = yield call(categoriesRequest);
    yield storeData('categories', categories.result);
    yield put(setCategoriesAction(categories.result));
  } catch (error) {
    console.log(error);
  }
}

function* get6Words(difficulty) {
  const result = [];
  const words = yield getData('words');
  const categories = yield getData('categories');
  let used = yield getData('categories');
  if (!used) {
    used = [];
  }
  for (let index = 0; index < categories.length; index++) {
    const category = categories[index];
    const filtered = words.filter(
      word =>
        word.categoryId === category.id &&
        !used.includes(word.word) &&
        (!difficulty || difficulty === word.difficulty),
    );
    if (filtered.length === 0) {
      result.push(words[Math.floor(Math.random() * words.length)]);
    } else {
      result.push(filtered[Math.floor(Math.random() * filtered.length)]);
    }
  }
  used = used.concat(result.map(w => w.word));
  yield storeData('used', used);
  return result;
}

function* startGame({payload}) {
  console.log('sagaaaaaaaaaa', payload);
  const difficulty = payload;
  const words = yield get6Words(difficulty);
  console.log(words);
  yield put(
    setGameAction(words, difficulty),
    //   {type: 'SET_GAME',
    //   payload: {
    //     words: words,
    //     index: 0,
    //     stage: 0,
    //     difficulty: difficulty,
    //   },
    // }
  );
}
function* newWords({payload}) {
  const difficulty = payload;
  const words = yield get6Words(difficulty);
  yield put(setNewWordsAction(words));
}

function* nextTurn({payload}) {
  const difficulty = payload;
  const words = yield get6Words(difficulty);
  const members = yield select(state => state.game.turns);
  let index = yield select(state => state.game.index);
  index++;
  if (index >= members.length) {
    index = 0;
  }
  yield put(
    setNewTurnAction(words, index),
    // {type: 'SET_NEW_TURN',
    // payload: {
    //   words,
    //   index,
    // }}
  );
}
function* watchWordsSaga() {
  yield takeLatest(GameTypes.GET_WORDS, getWords);
  yield takeLatest(GameTypes.GET_CATEGORIES, getCategories);
  yield takeLatest(GameTypes.START_GAME, startGame);
  yield takeLatest(GameTypes.GET_NEW_WORDS, newWords);
  yield takeLatest(GameTypes.NEXT_TURN, nextTurn);
}
export {watchWordsSaga};
