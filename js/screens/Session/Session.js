import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// (Stateless) Markup only
const Session = props => {
  return (
    <View style={styles.container}>
      <Text>This is session.</Text>
    </View>
  );
};

export default Session;
