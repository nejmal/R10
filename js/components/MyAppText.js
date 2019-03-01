import React from 'react';
import { Text, Platform } from 'react-native';
import { fonts } from '../config/styles';

export default props => (
  // <Text
  //   {...props}
  //   style={[
  //     { fontFamily: 'Montserrat', fontSize: 18, fontWeight: '100' },
  //     props.style
  //   ]}
  // >
  <Text
    {...props}
    style={[
      {
        // to test out fonts, use serif
        // fontFamily: Platform.OS === 'ios' ? `Montserrat` : `serif`,
        // fontFamily: Platform.OS === 'ios' ? `Montserrat` : `Montserrat-Regular`,
        // fontSize: 18,
        fontWeight: '100',
        // use this instead cause it will be easier to see the separation
        ...Platform.select({
          ios: { fontFamily: 'Montserrat', fontSize: fonts.md },
          android: { fontFamily: fonts.primary, fontSize: fonts.xs }
        })
      },
      props.style
    ]}
  >
    {props.children}
  </Text>
);

// {Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
