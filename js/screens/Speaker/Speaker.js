import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// (Stateless) Markup only
const Speaker = props => {
  return (
    <View style={styles.container}>
      <Text>This is speaker.</Text>
    </View>
  );
};

export default Speaker;
