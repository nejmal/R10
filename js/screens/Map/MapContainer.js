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
    this.timerHandle = setTimeout(
      () => this.setState({ isLoading: false }),
      600
    );
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  onLoad = () => {
    // Hack to prevent non loading images
    this.showSecondaryMarker = true;
    this.forceUpdate();
  };

  render() {
    const { onPress } = this.props;
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size='large' />
      </View>
    ) : (
      <Map title={'R10'} description={'R10 Conference'} onPress={onPress} />
    );
  }
}

export default MapContainer;
