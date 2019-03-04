import { StyleSheet, Platform } from 'react-native';
import { fonts } from '../../config/styles';

const styles = StyleSheet.create({
  text: {
    fontWeight: '100',
    ...Platform.select({
      ios: { fontFamily: 'Montserrat', fontSize: fonts.md },
      android: { fontFamily: fonts.primary, fontSize: fonts.xs }
    })
  }
});

export default styles;
