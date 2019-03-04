import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const Map = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 49.2637,
          longitude: -123.1381,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <Marker
          coordinate={{ latitude: 49.2637, longitude: -123.1381 }}
          title={title}
          description={description}
          image={require('../../assets/images/map_pin.png')}
        />
      </MapView>
    </View>
  );
};

Map.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Map;
