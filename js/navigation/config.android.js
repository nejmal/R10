import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Text from '../components/MyAppText.js';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import NavigationLayout from './NavigationLayout';
import Icon from '../components/Icon';

// create gradient header
const GradientHeader = props => (
  <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: '100%', width: '100%' }]}
    />
    <Header {...props} />
  </View>
);

// put gradient header here
export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent'
    // shadowOpacity: 3,
    // elevation: 3
    // fontFamily: 'Montserrat-Regular'
  }
  // headerLeft: (
  //   <Text
  //     style={{ color: 'red' }}
  //     onPress={() => navigation.navigate('NavigationLayout')}
  //   >
  //     Menu
  //   </Text>
  // )
});
