import React from 'react';
import {useSelector} from 'react-redux';
import {gameStage, game} from '../store/selectors';
import CurrentPlayer from './CurrentPlayer';
import GameMultyWord from './GameMultyWord';
import Answers from './Answers';
import TeamPoints from './TeamsPoints';

export default function Start() {
  const stage = useSelector(gameStage);
  const isGame = useSelector(game);
  console.log(isGame, 'isGame');

  if (!isGame) {
    return <TeamPoints />;
  }
  switch (stage) {
    case 0:
      return <CurrentPlayer />;
    case 1:
      return <GameMultyWord />;
    case 2:
      return <Answers />;
    default:
      break;
  }
}
