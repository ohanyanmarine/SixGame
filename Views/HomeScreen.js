import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen(props) {
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
            width: 50,
            height: 40,
            backgroundColor: 'red',
            margin: 50,
          }}></View>
      </View>
      <View style={styles.buttons}>
        <Button
          title="PLAY"
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
          title="HOW TO PLAY"
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
    height: '60%',
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
});
