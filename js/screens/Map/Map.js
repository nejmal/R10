import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 49.26346,
          longitude: -123.1381,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <Marker
          coordinate={{ latitude: 49.26346, longitude: -123.1381 }}
          title={'R10'}
          description={'R10 Conference'}
          image={require('../../assets/images/map_pin.png')}
        />
      </MapView>
    </View>
  );
};

export default Map;
