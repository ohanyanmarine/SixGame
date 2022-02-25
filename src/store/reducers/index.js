import { combineReducers } from "redux";
import teams from "./TeamsReducer"
import words from "./WordsReducer";

export default combineReducers({
  teams,
  words
});
