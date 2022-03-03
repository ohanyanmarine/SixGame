import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {useDispatch, useSelector} from 'react-redux';
import {setChangeStageAction} from '../store/actions';

export default function GameMultyWord(props) {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      console.log('seconds', seconds);
    } else if (seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setChangeStageAction());
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <Text style={{fontSize: 25}}>Game Multy Words</Text>
        <AnimatedProgressWheel
          size={40}
          width={10}
          progress={(0, 100)}
          animateFromValue={0}
          duration={10000}
          color={'white'}
          fullColor={'red'}
        />
        <View style={styles.teams}>
          <Text style={{fontSize: 25}}>{seconds}</Text>
        </View>
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
