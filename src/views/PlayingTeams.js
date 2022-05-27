import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import {choosenTeams, gameTeams} from '../store/selectors';
import {
  chooseMembersAction,
  setGameTeamsAction,
  setTurnsAction,
  setDifficultyAction,
} from '../store/actions';

export default function PlayingTeams(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const choosen = useSelector(choosenTeams);
  const playingTeams = useSelector(gameTeams);

  useEffect(() => {
    // dispatch(setGameTeamsAction(choosen));
    // dispatch(chooseMembersAction());
    dispatch(setTurnsAction());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <ScrollView>
          {playingTeams.map((team, index) => {
            return (
              <View key={index}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  {team.name}
                </Text>
                {team.members.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        marginHorizontal: 25,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 25}}>{item.user.name}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
          <View
            style={{
              paddingTop: 35,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Difficulty</Text>
              <View>
                <RNPickerSelect
                  style={styles}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{
                    label: 'Select difficulty...',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  onValueChange={value => {
                    dispatch(setDifficultyAction(value));
                  }}
                  items={[
                    {label: 'Easy', value: 1},
                    {label: 'Medium', value: 2},
                    {label: 'Difficult', value: 3},
                  ]}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Goal</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <RNPickerSelect
                  style={styles}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{
                    label: 'Select a goal...',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  onValueChange={value => dispatch(setGoalAction(value))}
                  items={[
                    {label: '50', value: 50},
                    {label: '100', value: 100},
                  ]}
                />
              </View>
            </View>
          </View>
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
          onPress={() => {
            props.navigation.navigate('Start');
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
    //alignItems: 'center',
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
    marginHorizontal: 10,
    marginVertical: 5,
  },
  teamName: {
    fontSize: 25,
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 20, // to ensure the text is never behind the icon
  },
});
