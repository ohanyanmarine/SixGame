import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setNextTurnAction} from '../store/actions';

export default function Answers() {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>Right Answers</Text>
      <View style={styles.teams}>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Word 1</Text>
          <View style={{height: 30, width: 30, backgroundColor: 'grey'}}></View>
        </View>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Word 2</Text>
          <View style={{height: 30, width: 30, backgroundColor: 'grey'}}></View>
        </View>

        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Points</Text>
          <Text style={styles.teamName}>10</Text>
        </View>
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
          onPress={() => dispatch(setNextTurnAction())} //props.navigation.navigate('EndGame')}
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
