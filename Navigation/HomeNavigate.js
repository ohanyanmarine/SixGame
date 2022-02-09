import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Views/HomeScreen';
import HowToPlay from '../Views/HowToPlay';
import CreateTeams from '../Views/CreateTeams';
import SettingsScreen from '../Views/Settings';
import TeamMembers from '../Views/TeamMembers';
import CurrentPlayer from '../Views/CurrentPlayer';
import GameMultyWord from '../Views/GameMultyWord';
import GameSingleWord from '../Views/GameSingleWord';
import Answers from '../Views/Answers';
import EndGame from '../Views/EndGame';

const Stack = createNativeStackNavigator();

function HomeNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="HowToPlay"
          component={HowToPlay}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="CreateTeams"
          component={CreateTeams}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="TeamMembers"
          component={TeamMembers}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="CurrentPlayer"
          component={CurrentPlayer}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="GameMultyWord"
          component={GameMultyWord}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="GameSingleWord"
          component={GameSingleWord}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Answers"
          component={Answers}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="EndGame"
          component={EndGame}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigate;
