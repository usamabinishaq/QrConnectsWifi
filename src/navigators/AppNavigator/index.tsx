import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import BottomNavigator from '../BottomNavigator';

export type RootStackParamList = {
  Splash: undefined;
  BottomTabs: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function () {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="BottomTabs" component={BottomNavigator} />
    </RootStack.Navigator>
  );
}
