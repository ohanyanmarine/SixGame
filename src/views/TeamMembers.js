import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {selectedTeam, selectMember, teamsSelector} from '../store/selectors';
import Modal from 'react-native-modal';
import {Controller, useForm} from 'react-hook-form';
import {
  addTeamMemberAction,
  getTeamsAction,
  selectTeamAction,
  setRemoveTeamMemberAction,
  getRemoveTeamMemberAction,
} from '../store/actions';
import {
  changeTeamMemberNameAction,
  getTeamMembersAction,
  selectTeamMemberAction,
  setTeamMembersAction,
} from '../store/actions/TeamAction';

export default function TeamMembers(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const selected = useSelector(selectedTeam);
  const teams = useSelector(teamsSelector);
  const selectedMember = useSelector(selectMember);
  console.log('teams', teams);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isModalVisibleAdd, setModalVisibleAdd] = useState(false);
  const [isModalVisibleChange, setModalVisibleChange] = useState(false);

  const toggleModalAdd = () => {
    setModalVisibleAdd(!isModalVisibleAdd);
  };
  const toggleModalChange = () => {
    setModalVisibleChange(!isModalVisibleChange);
  };

  const onSubmitAdd = data => {
    console.log(data);
    if (data) {
      dispatch(addTeamMemberAction(selected.id, data));
      console.log('data after dispatch', data, teams);
    }
    toggleModalAdd();
  };
  const onSubmitChange = data => {
    console.log(data);
    if (selected) {
      dispatch(
        changeTeamMemberNameAction(selected.id, selectedMember.id, data.name),
      );
    }
    toggleModalChange();
  };

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        {/* <Text style={{fontSize: 25}}>Create Team Members</Text> */}
        {teams.map((team, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.teamRow}
                onPress={() => {
                  dispatch(selectTeamAction(team.id));
                  console.log('selected', selected);
                }}>
                <Text key={index} style={{fontSize: 30, fontWeight: 'bold'}}>
                  {team.team_Name}
                </Text>
              </TouchableOpacity>

              {team.members.map((item, i) => {
                console.log(item, 'item');
                return (
                  <View
                    key={i}
                    style={{
                      marginHorizontal: 25,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(selectTeamMemberAction(team.id, item.id));
                        console.log('selectedMember ', selectedMember);

                        toggleModalChange();
                      }}>
                      <Text style={{fontSize: 25}}>{item.name}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        console.log('name for delete', item.id, team.id);
                        dispatch(setRemoveTeamMemberAction(item.id, team.id));
                      }}>
                      <Text style={{fontSize: 25}}>X</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
              <Button
                title={t('addTeam')}
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
                  toggleModalAdd();
                }}
              />
            </View>
          );
        })}
      </View>
      <Modal isVisible={isModalVisibleAdd}>
        <View style={{backgroundColor: 'white'}}>
          {/* <Input placeholder="Enter team name" /> */}
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
          <Button title="Add team member" onPress={handleSubmit(onSubmitAdd)} />
        </View>
      </Modal>
      <Modal isVisible={isModalVisibleChange}>
        <View style={{backgroundColor: 'white'}}>
          {/* <Input placeholder="Enter team name" /> */}
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
          <Button title="Change name" onPress={handleSubmit(onSubmitChange)} />
        </View>
      </Modal>
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
          onPress={() => props.navigation.navigate('CurrentPlayer')}
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
