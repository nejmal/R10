import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
import { StatusBar } from 'react-native';
import { FavesProvider } from './context';
import About from './screens/About';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <ApolloProvider client={client}>
        {/* now, our app have access to all the methods we had written and placed in context */}
        <FavesProvider>
          {/* <About /> */}
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
