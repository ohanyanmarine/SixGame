import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {friendsSelector, selectedTeam, oneTeam} from '../store/selectors';
import {
  addTeamMemberAction,
  selectTeamAction,
  getRemoveTeamMemberAction,
  initFriends,
  updateTeamNameAction,
  initTeams,
  getOneTeamAction,
} from '../store/actions';
import ModalHooks from './ModalHooks';

export default function OneTeam(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {
    isModalVisibleAddMember,
    isModalVisibleChangeTeamName,
    setModalVisibleAddMember,
    toggleModalAddMember,
    setModalVisibleChangeTeamName,
    toggleModalChangeTeamName,
  } = ModalHooks();
  const selected = useSelector(selectedTeam);
  const friends = useSelector(friendsSelector);
  const team = useSelector(oneTeam);

  useEffect(() => {
    dispatch(initFriends());
    dispatch(initTeams());
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmitChange = data => {
    if (selected) {
      dispatch(updateTeamNameAction(selected, data.name));
      dispatch(initTeams());
    }
    toggleModalChangeTeamName();
  };

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{team.name}</Text>
            <TouchableOpacity
              onPress={() => {
                toggleModalChangeTeamName();
              }}>
              <Text style={{fontSize: 25}}>edit</Text>
            </TouchableOpacity>
          </View>
          {team?.members?.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  marginHorizontal: 25,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 25}}>{item.user.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(getRemoveTeamMemberAction(item.id, team.id));
                    dispatch(getOneTeamAction(team.id));
                  }}>
                  <Text style={{fontSize: 25}}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <Button
            title={t('addMember')}
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
              dispatch(selectTeamAction(team.id));
              toggleModalAddMember();
            }}
          />
        </ScrollView>
      </View>

      <Modal
        isVisible={isModalVisibleAddMember}
        onBackdropPress={() => setModalVisibleAddMember(false)}>
        <View style={{backgroundColor: 'white'}}>
          <ScrollView>
            {friends?.map((friend, index) => (
              <View key={index} style={styles.teamRow}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(team.id, friend);
                    dispatch(addTeamMemberAction(team.id, friend.invitedUser));
                  }}>
                  <Text style={styles.teamName}>
                    {friend?.invitedUser.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <Button
            title={'OK'}
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
              dispatch(getOneTeamAction(team.id));
              setModalVisibleAddMember(false);
            }}
          />
        </View>
      </Modal>
      <Modal
        isVisible={isModalVisibleChangeTeamName}
        onBackdropPress={() => setModalVisibleChangeTeamName(false)}>
        <View style={{backgroundColor: 'white'}}>
          <Controller
            control={control}
            // rules={{
            //  required: true,
            // }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                // style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          <Button
            title={t('changeName')}
            onPress={handleSubmit(onSubmitChange)}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // height: '100%',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teams: {
    //alignItems: 'center',
    width: '100%',
    //height: '80%',
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
