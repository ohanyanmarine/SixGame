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
import {Button, CheckBox, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {choosenTeams, selectedTeam, teamsSelector} from '../store/selectors';
import {
  addTeamMemberAction,
  selectTeamAction,
  getRemoveTeamMemberAction,
  updateTeamMemberNameAction,
  selectTeamMemberAction,
  //getCheckMemberAction,
  setCheckMemberAction,
  chooseMembersAction,
  setGameTeamsAction,
  setTurnsAction,
  setTurnAction,
} from '../store/actions';

export default function TeamMembers(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const selected = useSelector(selectedTeam);
  const teams = useSelector(teamsSelector);
  const choosen = useSelector(choosenTeams);

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
    if (data) {
      dispatch(addTeamMemberAction(selected, {...data, id: Date.now()}));
    }
    toggleModalAdd();
  };
  const onSubmitChange = data => {
    dispatch(
      updateTeamMemberNameAction(selected.teamId, selected.memberId, data.name),
    );
    toggleModalChange();
  };

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <ScrollView>
          {choosen.map((team, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.teamRow}>
                  <Text key={index} style={{fontSize: 30, fontWeight: 'bold'}}>
                    {team.team_Name}
                  </Text>
                </TouchableOpacity>

                {team.members.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        marginHorizontal: 25,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <CheckBox
                        checked={item.check}
                        onPress={() => {
                          dispatch(setCheckMemberAction(team.id, item.id));
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(selectTeamAction(team.id));
                          dispatch(selectTeamMemberAction(team.id, item.id));
                          toggleModalChange();
                        }}>
                        <Text style={{fontSize: 25}}>{item.name}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(getRemoveTeamMemberAction(item.id, team.id));
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
                    toggleModalAdd();
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <Modal
        isVisible={isModalVisibleAdd}
        onBackdropPress={() => setModalVisibleAdd(false)}>
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
          <Button title={t('addMember')} onPress={handleSubmit(onSubmitAdd)} />
        </View>
      </Modal>
      <Modal
        isVisible={isModalVisibleChange}
        onBackdropPress={() => setModalVisibleChange(false)}>
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
          <Button
            title={t('changeName')}
            onPress={handleSubmit(onSubmitChange)}
          />
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
          onPress={() => {
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
