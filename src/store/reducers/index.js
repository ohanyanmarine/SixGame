import {combineReducers} from 'redux';
import teams from './TeamsReducer';
import game from './GameReducer';

export default combineReducers({
  teams,
  game,
});
