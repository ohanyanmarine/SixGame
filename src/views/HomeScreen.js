import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import '../locale/i18n';
import RNPickerSelect from 'react-native-picker-select';

export default function HomeScreen(props) {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <Icon
          name="settings-sharp"
          size={30}
          style={{
            height: 30,
            margin: 50,
          }}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <View
          style={{
            // width: 150,
            // height: 40,
            //backgroundColor: 'red',
            margin: 40,
          }}>
          <RNPickerSelect
            style={styles}
            useNativeAndroidPickerStyle={false}
            placeholder={{}}
            onValueChange={value => i18n.changeLanguage(value)}
            items={[
              {label: 'Հայերեն', value: 'hy'},
              {label: 'Русский', value: 'ru'},
              {label: 'English', value: 'en'},
            ]}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          title={t('play')}
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate('CreateTeams')}
        />
        <Button
          title={t('howToPlay')}
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate('HowToPlay')}
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
  bgImage: {
    //flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(78, 116, 289, 1)',
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
  },
  buttons: {
    //backgroundColor: 'yellow',
  },
  ads: {
    fontSize: 30,
    marginVertical: 10,
    //backgroundColor: 'green',
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 0.5,
    //borderColor: 'purple',
    //borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
