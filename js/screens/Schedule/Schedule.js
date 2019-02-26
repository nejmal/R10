import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// (Stateless) Markup only
const Schedule = props => {
  return (
    <View style={styles.container}>
      <Text>This is schedule.</Text>
    </View>
  );
};

export default Schedule;
