import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {gameTurns, gameIndex, gameStage} from '../store/selectors';
import CurrentPlayer from './CurrentPlayer';
import GameMultyWord from './GameMultyWord';
import Answers from './Answers';
import TeamPoints from './TeamsPoints';

export default function Start(props) {
  const {t} = useTranslation();
  const turns = useSelector(gameTurns);
  const stage = useSelector(gameStage);
  const index = useSelector(gameIndex);

  if (stage == 0 && index < turns.length) {
    return <CurrentPlayer />;
  } else if (stage == 1) {
    return <GameMultyWord />;
  } else if (stage == 2) {
    return <Answers />;
  } else {
    return <TeamPoints />;
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teams: {
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  buttons: {
    //backgroundColor: 'yellow',
  },
  ads: {
    fontSize: 30,
    marginVertical: 10,
    //backgroundColor: 'green',
  },
  teamRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  teamName: {
    fontSize: 25,
  },
});
