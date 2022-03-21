import {GameTypes} from '../types';

const INIT_STATE = {
  teams: [],
  turns: [],
  turn: {
    team_Name: '',
    member_Name: '',
  },
  stage: 0,
  index: 0,
  games: [],
  selectedWords: [],
  isGame: true,
  words: [],
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
        acc.push(el, state.teams[1].members[i]);
        return acc;
      }, []);
      return {...state, turns: players};

    case GameTypes.SET_TURN:
      let teamTurn = '';
      if (state.index % 2 == 0) {
        teamTurn = state.teams[0].team_Name;
      } else {
        teamTurn = state.teams[1].team_Name;
      }
      const memberTurn = state.turns.find((item, i) => {
        if (i === state.index) return item;
      });
      return {
        ...state,
        turn: {
          ...state.turn,
          team_Name: teamTurn,
          member_Name: memberTurn,
        },
      };

    case GameTypes.SET_WORDS:
      return {...state, words: payload};

    case GameTypes.SET_CATEGORIES:
      return {...state, categories: payload};

    case GameTypes.SET_GAME:
      let tmp = [...state.games];
      tmp.push({
        player: state.turn.member_Name,
        words: payload.words,
        difficulty: payload.difficulty,
        point: 0,
      });
      return {...state, games: tmp, stage: 1};

    case GameTypes.SET_NEW_WORDS:
      let temp = [...state.games];
      temp.slice(-1)[0].words = payload;
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
      t.point = checkedLength.length;
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
