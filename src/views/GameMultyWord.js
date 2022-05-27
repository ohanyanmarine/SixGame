import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getNewWordsAction, selectWordAction} from '../store/actions';
import {
  gameCategories,
  gameDifficulty,
  gameItems,
  selected,
} from '../store/selectors';
import Timer from './Timer';
import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function GameMultyWord() {
  const dispatch = useDispatch();
  const game = useSelector(gameItems);
  const selectedWords = useSelector(selected);
  const difficulty = useSelector(gameDifficulty);
  const categories = useSelector(gameCategories);
  const seconds = Timer();

  useEffect(() => {
    for (let i = categories.length; i < 80; i += categories.length) {
      if (selectedWords.length == i) {
        dispatch(getNewWordsAction(difficulty));
      }
    }
  }, [selectedWords.length]);

  let gameWords = game[game.length - 1].words;

  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        {/* <Timer /> */}
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
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {game[game.length - 1].player.name}
          </Text>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            {gameWords[gameWords.length - 1].map((word, i) => {
              let s = selectedWords.find(item => {
                return item.word.id == word.id;
              });
              const color = !s ? 'grey' : 'green';
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    if (!s) {
                      dispatch(selectWordAction(word));
                    }
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: color,
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
    //height: '80%',
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
