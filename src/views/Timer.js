import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function Timer() {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View style={styles.teams}>
      <Text style={{fontSize: 25}}>Game Multy Words</Text>
      <AnimatedProgressWheel
        size={40}
        width={10}
        progress={(0, 100)}
        animateFromValue={0}
        duration={15000}
        color={'white'}
        fullColor={'red'}
      />
      <View style={styles.teams}>
        <Text style={{fontSize: 25}}>{seconds}</Text>
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
  },

  teamName: {
    fontSize: 25,
  },
});
