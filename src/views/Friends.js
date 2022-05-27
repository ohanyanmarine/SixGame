import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {Controller, useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';
import {addFriendAction, initFriends} from '../store/actions';
import {friendsSelector} from '../store/selectors';

export default function Friends() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const friends = useSelector(friendsSelector);

  useEffect(() => {
    dispatch(initFriends());
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isModalVisibleAdd, setModalVisibleAdd] = useState(false);

  const toggleModalAdd = () => {
    setModalVisibleAdd(!isModalVisibleAdd);
  };

  const onSubmitAdd = data => {
    if (data) {
      console.log(data, 'data after submit');
      dispatch(addFriendAction(data));
      dispatch(initFriends());
    }
    toggleModalAdd();
  };

  return (
    <View>
      <Text>FRIENDS</Text>
      <ScrollView>
        {friends?.map((friend, index) => (
          <View key={index} style={styles.teamRow}>
            <Text style={styles.teamName}>{friend?.invitedUser?.name}</Text>
          </View>
        ))}
      </ScrollView>
      <Modal
        isVisible={isModalVisibleAdd}
        onBackdropPress={() => setModalVisibleAdd(false)}>
        <View style={{backgroundColor: 'white'}}>
          <Controller
            control={control}
            // rules={{
            //  required: true,
            // }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                // style={styles.input}
                placeholder="name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="email"
                style={{borderBottomColor: 'grey', borderBottomWidth: 1}}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {/* {errors.email && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )} */}
          <Button title={t('addMember')} onPress={handleSubmit(onSubmitAdd)} />
        </View>
      </Modal>
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
          toggleModalAdd();
        }}
      />
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
