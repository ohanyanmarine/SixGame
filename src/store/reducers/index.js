import {combineReducers} from 'redux';
import teams from './TeamsReducer';
import words from './WordsReducer';
import game from './GameReducer';

export default combineReducers({
  teams,
  words,
  game,
});
