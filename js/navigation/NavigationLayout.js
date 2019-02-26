import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Session: SessionScreen
});

const MapStack = createStackNavigator({
  Map: MapScreen
});

const FavesStack = createStackNavigator({
  Faves: FavesScreen,
  Session: SessionScreen
});

const AboutStack = createStackNavigator({
  About: AboutScreen
});

export default createBottomTabNavigator({
  Schedule: ScheduleStack,
  Map: MapStack,
  Faves: FavesStack,
  About: AboutStack
});
