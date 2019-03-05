import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
import { StatusBar } from 'react-native';
import { FavesProvider } from './context';

export default class App extends Component {
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
