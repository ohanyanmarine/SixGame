import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Divider, Input, CheckBox} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTeamAction,
  chooseTeamsAction,
  setCheckAction,
  getRemoveTeamAction,
  initTeams,
  getOneTeamAction,
} from '../store/actions';
import {Controller, useForm} from 'react-hook-form';
import {teamsSelector} from '../store/selectors';
import ModalHooks from './ModalHooks';

export default function CreateTeams(props) {
  const {setModalVisibleAddTeam, toggleModalAddTeam, isModalVisibleAddTeam} =
    ModalHooks();
  const teams = useSelector(teamsSelector);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmitAdd = data => {
    if (data) {
      dispatch(addTeamAction({...data, members: []}));
    }
    toggleModalAddTeam();
  };

  useEffect(() => {
    dispatch(initTeams());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <ScrollView>
          {teams.map((team, index) => (
            <View key={index} style={styles.teamRow}>
              <CheckBox
                checked={team.check}
                onPress={() => dispatch(setCheckAction(team.id))}
              />
              <TouchableOpacity
                //style={styles.teamRow}
                onPress={() => {
                  dispatch(getOneTeamAction(team.id));
                  props.navigation.navigate('OneTeam');
                }}>
                <Text style={styles.teamName}>{team.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(getRemoveTeamAction(team.id));
                }}>
                <Text style={styles.teamName}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
          onPress={toggleModalAddTeam}
        />
      </View>
      <Modal
        isVisible={isModalVisibleAddTeam}
        onBackdropPress={() => setModalVisibleAddTeam(false)}>
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
          <Button title={t('addTeam')} onPress={handleSubmit(onSubmitAdd)} />
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
            dispatch(chooseTeamsAction());
            props.navigation.navigate('TeamMembers');
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
    //justifyContent: 'flex-start',
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
