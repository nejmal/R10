import React from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Icon';
import { colors, fonts } from '../config/styles';

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
  headerTintColor: colors.bgLight,
  headerTitleStyle: {
    fontSize: fonts.md
  },
  headerStyle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      android: { fontFamily: 'Montserrat-Light', fontSize: fonts.md }
    })
    // shadowOpacity: 3,
    // elevation: 3
    // fontFamily: 'Montserrat-Regular'
  },
  headerLeft: {
    ...Platform.select({
      ios: <View />,
      android: (
        <View>
          {navigation.state.routeName === 'Session' ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              {/* {console.log('NAVIGATION', navigation.state.routeName)} */}
              <Icon
                name='arrow-back'
                size={25}
                color={colors.bgLight}
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              {/* {console.log('NAVIGATION', navigation)} */}
              <Icon
                name='menu'
                size={25}
                color={colors.bgLight}
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          )}
        </View>
      )
    })
  }
});
