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
import { colors, fonts } from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config';

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Schedule') {
          // iconName = `ios-calendar${focused ? '' : '-outline'}`;
          iconName = `ios-calendar`;
        } else if (routeName === 'Map') {
          // iconName = `ios-map${focused ? '' : '-outline'}`;
          iconName = `ios-map`;
        } else if (routeName === 'Faves') {
          // iconName = `ios-heart${focused ? '' : '-outline'}`;
          iconName = `ios-heart`;
        } else if (routeName === 'About') {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = `ios-information-circle`;
        }

        // You can return any component that you like here!
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={tintColor}
            style={{ padding: 8 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: colors.bgLight,
      inactiveTintColor: colors.neutralDark,
      labelStyle: {
        fontSize: fonts.sm,
        fontFamily: 'Montserrat'
      },
      style: {
        backgroundColor: colors.bgDark
      }
    }
  }
  // {
  //   tabBarOptions: {
  //     activeTintColor: colors.bgLight,
  //     inactiveTintColor: colors.neutralDark,
  //     labelStyle: {
  //       fontSize: fonts.sm
  //     },
  //     style: {
  //       backgroundColor: colors.bgDark
  //     }
  //   }
  // }
);
