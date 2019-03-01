import { StyleSheet, Platform } from 'react-native';
import { button, margin } from '../../config/styles';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 50,
    ...Platform.select({
      ios: { marginVertical: margin.md, marginHorizontal: margin.lg * 2 },
      android: {
        marginVertical: margin.sm * 1.5,
        marginHorizontal: margin.lg * 3
      }
    })
  },
  button: { ...button }
});

export default styles;
