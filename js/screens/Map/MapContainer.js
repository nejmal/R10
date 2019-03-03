// import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Text from '../../components/MyAppText.js';
import Map from './Map';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './styles';

// create a component
// (Stateful) Logic and state
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = {
    title: 'Map'
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size='large' />
      </View>
    ) : (
      <Map title={'R10'} description={'R10 Conference'} />
    );
  }
}

//make this component available to the app
export default MapContainer;
