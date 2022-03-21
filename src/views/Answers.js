import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextTurnAction} from '../store/actions';
import {
  setCheckAnswersAction,
  setPointsAction,
} from '../store/actions/GameAction';
import {selected} from '../store/selectors';
import {gamePoints} from '../store/selectors/GameSelectors';

export default function Answers() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const selectedWords = useSelector(selected);
  const points = useSelector(gamePoints);
  console.log('Answers', selectedWords);
  console.log('Points', points);

  useEffect(() => {
    dispatch(setPointsAction());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>Points {points} </Text>
      <View style={styles.teams}>
        <ScrollView>
          {selectedWords.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.teamName}>{item.word.word}</Text>
                <CheckBox
                  checked={item.check}
                  onPress={() => {
                    dispatch(setCheckAnswersAction(item.word.id));
                    dispatch(setPointsAction());
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
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
    //justifyContent: 'center',
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
