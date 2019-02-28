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
import { platform } from 'os';

// define your styles
const styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    borderRadius: 50,
    marginVertical: margin.md,
    marginHorizontal: margin.lg * 2
  },
  button: { ...button }
});

export default styles;
