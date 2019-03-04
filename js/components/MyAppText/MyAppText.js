import React from 'react';
import { Text, Platform } from 'react-native';

import styles from './styles';

export default props => (
  // <Text
  //   {...props}
  //   style={[
  //     { fontFamily: 'Montserrat', fontSize: 18, fontWeight: '100' },
  //     props.style
  //   ]}
  // >
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

// {Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
