import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Text from '../../components/MyAppText.js';
import Map from './Map';
import styles from './styles';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Map'
  };

  render() {
    return (
      <View>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size='large' />
              </View>
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          return <Map data={data} />;
        }}
      </View>
    );
  }
}

export default MapContainer;
