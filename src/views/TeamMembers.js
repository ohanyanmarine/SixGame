import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {choosenTeams, teamsSelector} from '../store/selectors';
import {
  chooseMembersAction,
  setCheckMemberAction,
  setGameTeamsAction,
} from '../store/actions';

export default function TeamMembers(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const teams = useSelector(teamsSelector);
  const choosen = useSelector(choosenTeams);
  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <ScrollView>
          {choosen.map((team, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.teamRow}>
                  <TouchableOpacity style={styles.teamRow}>
                    <Text
                      key={index}
                      style={{fontSize: 30, fontWeight: 'bold'}}>
                      {team.name}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                {team.members.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        marginHorizontal: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <CheckBox
                        checked={item.check}
                        onPress={() => {
                          dispatch(setCheckMemberAction(team.id, item.id));
                        }}
                      />
                      <Text style={{fontSize: 25}}>{item?.user?.name}</Text>
                    </View>
                  );
                })}
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
          onPress={() => {
            dispatch(setGameTeamsAction(choosen));
            dispatch(chooseMembersAction());
            props.navigation.navigate('PlayingTeams');
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
});
