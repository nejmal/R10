import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// (Stateless) Markup only
const Map = props => {
  return (
    <View style={styles.container}>
      <Text>This is map.</Text>
    </View>
  );
};

export default Map;
