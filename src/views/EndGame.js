import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {resetGameAction} from '../store/actions';

export default function EndGame(props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={[styles.teamName, {paddingVertical: 50}]}>Winner Team</Text>
      <View style={styles.teams}>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Player</Text>
          <View style={{height: 30, width: 30, borderWidth: 1}}></View>
        </View>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Player</Text>
          <View style={{height: 30, width: 30, borderWidth: 1}}></View>
        </View>

        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Player</Text>
          <View style={{height: 30, width: 30, borderWidth: 1}}></View>
        </View>
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
            dispatch(resetGameAction());
            props.navigation.navigate('Main');
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
