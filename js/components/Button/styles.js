import { StyleSheet, Platform } from 'react-native';
import {
  loader,
  container,
  separator,
  heading,
  colors,
  subtitle,
  paragraph,
  red,
  black,
  padding,
  button,
  margin
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    borderRadius: 50,
    // marginVertical: margin.md,
    // marginHorizontal: margin.lg * 2,
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
