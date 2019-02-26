import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import About from '../screens/About';
import NavigationLayout from './NavigationLayout';
import SpeakerModal from '../screens/Speaker';

// const AppNavigator = createStackNavigator({
//   About: {
//     screen: About
//   }
// });

// export default createAppContainer(AppNavigator);

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal
    },
    { headerMode: 'none', mode: 'modal' } // second argument in createStackNavigator
  )
);
