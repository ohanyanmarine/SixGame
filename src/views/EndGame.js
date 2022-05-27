import React, {useEffect} from 'react';
import moment from 'moment';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {resetGameAction, createGameAction} from '../store/actions';
import {gameItems, gameTeams} from '../store/selectors';

export default function EndGame(props) {
  const dispatch = useDispatch();
  const playingTeams = useSelector(gameTeams);
  const game = useSelector(gameItems);

  playingTeams.map(team => {
    let result = 0;
    for (let i = 0; i < game.length; i++) {
      const element = game[i];
      if (team.name === element.player.team) {
        result += element.point;
        team.points = result;
      }
    }
    return playingTeams;
  });

  const winnerTeam = playingTeams.reduce(
    (prev, current) => {
      return prev.points > current.points ? prev : current;
    },
    {point: 0},
  );

  const winner = game.filter(item => item.player.team === winnerTeam.name);
  console.log(winner);

  useEffect(() => {
    const members = winner.map(item => {
      return {id: item.player.user.id};
    });
    const turns = winner.map(item => {
      return {
        memberId: item.player.user.id,
        points: item.point,
      };
    });
    let today = moment(new Date()).format('YYYY-MM-DD');
    dispatch(
      createGameAction({
        date: today,
        members: members,
        turns: turns,
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.teamName, {fontWeight: 'bold'}]}>Winner Team</Text>
        <Text style={styles.teamName}>{winnerTeam.name}</Text>
        <Text style={styles.teamName}>Points {winnerTeam.points}</Text>
      </View>
      <View style={styles.teams}>
        {winner.map((members, i) => {
          return (
            <View key={i} style={styles.teamRow}>
              <Text style={styles.teamName}>{members.player.user.name}</Text>

              <Text style={styles.teamName}>{members.point}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttons}>
        <Button
          title="Play Again"
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 170,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title="Home"
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 170,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          onPress={() => {
            props.navigation.navigate('Main');
            dispatch(resetGameAction());
          }}
        />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Divider
          style={{width: '100%'}}
          color="#2089dc"
          insetType="left"
          subHeader="Ads"
          subHeaderStyle={styles.ads}
          width={1}
          orientation="horizontal"
        />
      </View>
    </View>
  );
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
    //height: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
