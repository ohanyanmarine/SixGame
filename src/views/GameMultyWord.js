import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNewWordsAction,
  selectWordAction,
  setChangeStageAction,
  setStartAction,
} from '../store/actions';
import {
  gameCategories,
  gameDifficulty,
  gameWords,
  selected,
} from '../store/selectors';
import Timer from './Timer';

export default function GameMultyWord() {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState('grey');
  const game = useSelector(gameWords);
  const selectedWords = useSelector(selected);
  const difficulty = useSelector(gameDifficulty);
  const categories = useSelector(gameCategories);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setChangeStageAction(difficulty));
    }, 15000);
  }, []);

  useEffect(() => {
    for (let i = categories.length; i < 600; i += categories.length) {
      if (selectedWords.length == i) {
        dispatch(getNewWordsAction(difficulty));
        setSelectedColor('grey');
        console.log(i);
      }
    }
  }, [selectedWords.length]);

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <Timer />
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {game.slice(-1)[0].player.name}
          </Text>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            {game.slice(-1)[0].words.map((word, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    dispatch(selectWordAction(word));
                    setSelectedColor('green');
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: selectedColor,
                    }}>
                    {word.word}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
