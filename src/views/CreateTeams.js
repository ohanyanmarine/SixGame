import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Divider, Input, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTeamAction,
  chooseTeamsAction,
  //getCheckAction,
  setCheckAction,
  getRemoveTeamAction,
  selectTeamAction,
  updateTeamNameAction,
} from '../store/actions';
import {Controller, useForm} from 'react-hook-form';
import {selectedTeam, teamsSelector} from '../store/selectors';

export default function CreateTeams(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
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
  const teams = useSelector(teamsSelector);
  const selected = useSelector(selectedTeam);

  const onSubmitAdd = data => {
    if (data) {
      dispatch(
        addTeamAction({...data, id: Date.now(), members: [], check: false}),
      );
    }
    toggleModalAdd();
  };
  const onSubmitChange = data => {
    if (selected) {
      dispatch(updateTeamNameAction(selected, data.team_Name));
    }
    toggleModalChange();
  };

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
                  dispatch(selectTeamAction(team.id));
                  toggleModalChange();
                }}>
                <Text style={styles.teamName}>{team.team_Name}</Text>
                {/* <Icon name="team" size={30} /> */}
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
          onPress={toggleModalAdd}
        />
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
            name="team_Name"
          />
          <Button title={t('addTeam')} onPress={handleSubmit(onSubmitAdd)} />
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
            name="team_Name"
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
