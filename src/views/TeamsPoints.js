import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {gameItems, gameTeams} from '../store/selectors';

export default function TeamPoints() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const playingTeams = useSelector(gameTeams);
  const game = useSelector(gameItems);

  const getPoint = team => {
    let result = 0;
    for (let i = 0; i < game.length; i++) {
      const element = game[i];
      if (team.name === element.player.team) {
        result += element.point;
      }
    }
    return result;
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Teams Points</Text>
      <View style={styles.teams}>
        {playingTeams.map((team, index) => {
          return (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
              key={index}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                {team.name}
              </Text>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                {getPoint(team)}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttons}>
        <Button
          title={t('next')}
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate('EndGame')}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teams: {
    alignItems: 'center',
    width: '100%',
    // height: '80%',
  },
  buttons: {},
  ads: {
    fontSize: 30,
    marginVertical: 10,
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
