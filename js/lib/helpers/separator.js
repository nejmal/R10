import React from 'react';
import { View, StyleSheet } from 'react-native';
import { separator } from '../../config/styles';

export const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    ...separator
  }
});
