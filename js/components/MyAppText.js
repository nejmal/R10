import React from 'react';
import { Text } from 'react-native';

export default props => (
  <Text {...props} style={[{ fontFamily: 'Montserrat' }, props.style]}>
    {props.children}
  </Text>
);
