import { StyleSheet, Platform } from 'react-native';
import { fonts } from '../../config/styles';

const styles = StyleSheet.create({
  text: {
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
  }
});

export default styles;
