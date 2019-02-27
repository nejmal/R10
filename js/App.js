import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './config/api';
import { StyleSheet, Text, View } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { StatusBar } from 'react-native';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <ApolloProvider client={client}>
        {/* <View style={styles.container}> */}
        <RootStackNavigator />
        {/* </View> */}
      </ApolloProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });
