import { StyleSheet } from 'react-native';
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
    marginVertical: margin.md,
    marginHorizontal: margin.lg * 2
  },
  button: { ...button }
});

export default styles;
