import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
import { StatusBar, Platform } from 'react-native';
import { FavesProvider } from './context';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    {
      Platform.OS === 'ios' ? null : SplashScreen.hide();
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
