import React from 'react';
import { Text } from 'react-native';

export default props => (
  <Text
    {...props}
    style={[
      { fontFamily: 'Montserrat', fontSize: 18, fontWeight: '100' },
      props.style
    ]}
  >
    {props.children}
  </Text>
);
