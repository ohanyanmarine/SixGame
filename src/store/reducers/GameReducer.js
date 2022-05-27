import {GameTypes} from '../types';

const INIT_STATE = {
  teams: [],
  turns: [],
  stage: 0,
  index: 0,
  games: [],
  selectedWords: [],
  isGame: true,
  categories: [],
  difficulty: null,
  goal: null,
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case GameTypes.SET_GAME_TEAMS:
      return {...state, teams: payload};

    case GameTypes.CHOOSE_MEMBERS:
      const gameTeams = [...state.teams];
      gameTeams.map(team => {
        team.members = team.members.filter(item => {
          return item.check;
        });
      });
      return {...state, teams: gameTeams};

    case GameTypes.SET_TURNS:
      const players = state.teams[0].members.reduce((acc, el, i) => {
        acc.push(
          {...el, team: state.teams[0].name},
          {...state.teams[1].members[i], team: state.teams[1].name},
        );
        return acc;
      }, []);
      return {...state, turns: players};

    case GameTypes.SET_WORDS:
      return {...state, words: payload};

    case GameTypes.SET_CATEGORIES:
      return {...state, categories: payload};

    case GameTypes.SET_GAME:
      let tmp = [...state.games];
      let index = state.index;
      tmp.push({
        player: state.turns[index],
        words: [payload.words],
        difficulty: payload.difficulty,
        point: 0,
      });
      return {...state, games: tmp, stage: 1};

    case GameTypes.SET_NEW_WORDS:
      let temp = [...state.games];
      temp[temp.length - 1].words.push(payload);
      return {...state, games: temp};

    case GameTypes.CHANGE_STAGE:
      return {...state, stage: 2};

    case GameTypes.SELECT_WORD:
      return {
        ...state,
        selectedWords: [...state.selectedWords, {word: payload, check: true}],
      };
    case GameTypes.CHECK_ANSWERS:
      const checked = state.selectedWords.map(item => {
        if (item.word.id === parseInt(payload)) {
          item.check = !item.check;
        }
        return {...item};
      });
      return {...state, selectedWords: checked};

    case GameTypes.GAME_OVER:
      return {...state, isGame: false, selectedWords: []};

    case GameTypes.SET_POINTS:
      let t = [...state.games];
      let checkedLength = state.selectedWords.filter(item => {
        return item.check === true;
      });
      t[t.length - 1].point = checkedLength.length;
      return {...state, games: t};

    case GameTypes.NEXT_TURN:
      let i = state.index;
      i++;
      if (i == state.turns.length) {
        return {...state, isGame: false};
      }
      return {...state, stage: 0, index: i, selectedWords: []};

    case GameTypes.SET_DIFFICULTY:
      return {...state, difficulty: payload};

    case GameTypes.SET_GOAL:
      return {...state, goal: payload};

    case GameTypes.RESET_GAME:
      return INIT_STATE;

    default:
      return state;
  }
};
