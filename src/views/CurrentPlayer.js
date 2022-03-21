import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setStartAction} from '../store/actions';
import {gameDifficulty, gameTurn} from '../store/selectors';

export default function CurrentPlayer(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const turn = useSelector(gameTurn);
  const difficulty = useSelector(gameDifficulty);

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Current player</Text>
        <View
          style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {turn.team_Name}
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {turn.member_Name.name}
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          title={t('start')}
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => {
            dispatch(setStartAction(difficulty));
            // props.navigation.navigate('GameMultyWord');
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
