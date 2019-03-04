import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Map from './Map';
import styles from './styles';

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

export default MapContainer;
