import {combineReducers} from 'redux';
import teams from './TeamsReducer';
import game from './GameReducer';
import auth from './AuthReducer';
import friends from './FriendReducer';

export default combineReducers({
  teams,
  game,
  auth,
  friends,
});
